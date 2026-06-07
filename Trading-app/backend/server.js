import express from "express";
import cors from "cors";
import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Working");
});

app.get("/api/stock/:symbol", async (req, res) => {
  try {
    const symbol = `${req.params.symbol}.NS`;

    const quote = await yahooFinance.quote(symbol);

    res.json({
      symbol: quote.symbol,
      name: quote.shortName,
      price: quote.regularMarketPrice,
      change: quote.regularMarketChangePercent,
      high: quote.regularMarketDayHigh,
      low: quote.regularMarketDayLow,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 5000");
});
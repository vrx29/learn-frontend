import { z } from "zod";

const userSchema = z.object({ id: z.string(), name: z.string() });
const commentSchema = z.object({ text: z.string() });

const schemas = {
  users: z.array(userSchema),
  "users/{id}": userSchema,
  "posts/{id}/comments": z.array(commentSchema),
} as const;

type SchemaMap = typeof schemas;
type ValidEndpoint = keyof SchemaMap;

class ValidatedClient {
  private getSchema(endpoint: ValidEndpoint) {
    return schemas[endpoint];
  }

  async get<T extends ValidEndpoint>(
    endpoint: T,
  ): Promise<z.infer<SchemaMap[T]>> {
    const data = await fetch(`api/${endpoint}`);
    const schema = this.getSchema(endpoint);
    return schema.parse(data);
  }
}

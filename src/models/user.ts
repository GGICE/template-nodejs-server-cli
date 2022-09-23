import type { ExtractDoc, ExtractProps } from 'ts-mongoose';
import { createSchema, Type, typedModel } from 'ts-mongoose';

const UserSchema = createSchema({
  name: Type.string({ required: true, unique: true }),
});

const userModel = typedModel('User', UserSchema);

export type UserDoc = ExtractDoc<typeof UserSchema>;
export type UserProps = ExtractProps<typeof UserSchema>;
export default userModel;

import { type SchemaTypeDefinition } from 'sanity';
import codepen from '../schemas/codepen';
import project from '../schemas/project';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, codepen],
};

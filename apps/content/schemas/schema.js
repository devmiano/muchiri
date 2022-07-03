import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import banner from './banner';
import project from './project';
import service from './service';
import skill from './skill';
import user from './user';
import product from './product';
import hero from './hero';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		banner,
		hero,
		product,
		project,
		service,
		skill,
		user,
	]),
});

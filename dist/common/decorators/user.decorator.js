"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.UserEntity = (0, common_1.createParamDecorator)((data, ctx) => graphql_1.GqlExecutionContext.create(ctx).getContext().req.user);
//# sourceMappingURL=user.decorator.js.map
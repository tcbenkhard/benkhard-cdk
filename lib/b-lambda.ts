import nodejs from "aws-cdk-lib/aws-lambda-nodejs";
import {Stack} from "./b-cdk";

export class NodejsFunction extends nodejs.NodejsFunction {
    constructor(scope: Stack, id: string, props: nodejs.NodejsFunctionProps) {
        super(scope, id, {
            ...props,
            role: scope.serviceRole,
            functionName: `${scope.stackName}-${props.functionName}`,
        });
    }
}
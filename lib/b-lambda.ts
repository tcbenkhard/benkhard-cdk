import {aws_lambda_nodejs} from "aws-cdk-lib";
import {Stack} from "./b-cdk";

export class NodejsFunction extends aws_lambda_nodejs.NodejsFunction {
    constructor(scope: Stack, id: string, props: aws_lambda_nodejs.NodejsFunctionProps) {
        super(scope, id, {
            ...props,
            role: scope.serviceRole,
            functionName: `${scope.stackName}-${props.functionName}`,
        });
    }
}
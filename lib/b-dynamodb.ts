import {aws_dynamodb} from "aws-cdk-lib";
import {Stack} from "./b-cdk";

export class Table extends aws_dynamodb.Table {
    constructor(scope: Stack, id: string, props: aws_dynamodb.TableProps) {
        super(scope, id, {
            ...props,
            tableName: `${scope.stackName}-${props.tableName}`,
        });
        this.grantReadWriteData(scope.serviceRole);
    }
}
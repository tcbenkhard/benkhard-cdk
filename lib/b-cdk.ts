import * as cdk from "aws-cdk-lib";
import { Construct } from 'constructs';
import {IRole, Role, ServicePrincipal} from "aws-cdk-lib/aws-iam";

export class Stack extends cdk.Stack {
    serviceRole: IRole

    constructor(scope: Construct, id: string, stackName: string) {
        super(scope, id, {
            stackName
        });
        this.serviceRole = new Role(this, 'ServiceRole', {
            roleName: `${this.stackName}-servicerole`,
            assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
            description: `Service role for ${this.stackName}`
        })
    }
}
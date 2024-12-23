import * as cdk from "aws-cdk-lib";
import { Construct } from 'constructs';
import {IRole, ManagedPolicy, Role, ServicePrincipal} from "aws-cdk-lib/aws-iam";
import {Tags} from "aws-cdk-lib";

export class Stack extends cdk.Stack {
    serviceRole: IRole

    constructor(scope: Construct, id: string, stackName: string) {
        super(scope, id, {
            stackName
        });
        this.serviceRole = new Role(this, 'ServiceRole', {
            roleName: `${this.stackName}-servicerole`,
            assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
            description: `Service role for ${this.stackName}`,
            managedPolicies: [
                ManagedPolicy.fromAwsManagedPolicyName("AWSLambdaBasicExecutionRole"),
            ]
        })
        Tags.of(this.serviceRole).add('Application', `${this.stackName}`)
    }
}
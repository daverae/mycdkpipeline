import { CfnOutput, cfnTagToCloudFormation, Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// IMPORT AMPLIFY EXPORTED BACKEND HERE
import { AmplifyExportedBackend } from '@aws-amplify/cdk-exported-backend';
import * as path from 'path'
import * as cdk from 'aws-cdk-lib'

export class AmplifyStage extends Stage {
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);
    
    // ADD AMPLIFY EXPORTED BACKEND STACK HERE
    const amplifyStack = new AmplifyExportedBackend(this, "amplifyexportedbackend", {
      path: path.resolve(__dirname, '..', 'amplify-export-mytodoapp'),
      amplifyEnvironment: "dev"
    })
  }
}

def label() {
    def value = "corp-${UUID.randomUUID().toString()}"
    return value
}


pipeline {
   
    agent {
        kubernetes {
        label label()
        defaultContainer 'jnlp'
        yamlFile '.jenkins/stack.yml'
        }
    } // and agent

    environment {
        AWS_REGION = "eu-west-2"
        AWS_ACCESS = credentials('aws-identity')
        NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token')
        AWS_CORP_STAGING_SECRETS = credentials('staging-corp')
        AWS_CORP_PROD_SECRETS = credentials('prod-corp')
        GITHUB_JENKINS_TOKEN = credentials('githubhubtoken')
    } // end environment

    stages {
        stage("Test") {
            steps {
                container("node") {
                    ansiColor('xterm') {
                        sh ".jenkins/scripts/test.sh"
                    }
                }
            }
        }//end stage

        stage('Deploy the preview') {
            when {
                branch "PR-*"
            }
            
            steps {
                script {
                    SITE_ID="d3c509b0-5d03-4792-bb11-4942a144cb67"
                    STAGING=true
                    
                }

                container("node") {
                    ansiColor('xterm') {
                        sh ".jenkins/scripts/preview.sh $SITE_ID $AWS_CORP_STAGING_SECRETS $BRANCH_NAME $STAGING"
                    }
                 }
            }
        } //end stage

        stage("Deploy staging") {
            when {
                allOf {
                    branch "master"
                }
            }
            steps {
                script {
                    SITE_ID="d3c509b0-5d03-4792-bb11-4942a144cb67"
                    STAGING=true
                }
                container("node") {
                    ansiColor('xterm') {
                        sh ".jenkins/scripts/deploy.sh $SITE_ID $AWS_CORP_STAGING_SECRETS $STAGING"
                    }
                }
            }
        }//end stage
        
        stage("Deploy production") {
            when {
                allOf {
                    branch "release-v*"
                }
            }
            steps {
                script {
                    SITE_ID="eb030c10-2014-4157-aaf5-f1e6687cbd11"
                }
                container("node") {
                    ansiColor('xterm') {
                        sh ".jenkins/scripts/deploy.sh $SITE_ID $AWS_CORP_PROD_SECRETS"
                    }
                }
            }
        }//end stage

    }// end stages
} // end pipeline

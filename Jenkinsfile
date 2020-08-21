pipeline {
	agent {
		//docker {
			//image 'node:13'
			label 'akali'
			//args '-p 3000:3000'
		//}
	}
	stages {
		stage('BUILD') {
			steps {
				echo "Install dependences and moduler for project"
				sh 'yarn install'
			}
		}
		stage('TEST') {
			when {
				branch 'Test'
			}
			steps {
				echo "Test project in development"
				sh 'yarn start & sleep 20'
				echo "webserver on: http://127.0.0.1:3000"
				input message: 'Click to process to allow continue project or abort to quit'
				echo "successful"
			}
		}
		stage('DEPLOY') {
			when {
				branch 'Deploy'
			}
			steps {
				echo "Build apps for production "
				rtNpmResolver (
				    id: 'resolver-node-react',
				    serverId: 'jfrogserver',
				    repo: 'npm-local'
				)
				rtNpmDeployer (
				    id: 'deployer-node-react',
				    serverId: 'jfrogserver',
				    repo: 'npm-local-dependencies'
				    // Attach custom properties to the published artifacts:
				    //properties: ['key1=value1', 'key2=value2']
				)
				rtNpmInstall (
				    // Optional tool name from Jenkins configuration
				    //tool: NPM_TOOL,
				    // Optional path to the project root. If not set, the root of the workspace is assumed as the root project path.
				    //path: 'npm-example',
				    // Optional npm flags or arguments.
				    //args: '--verbose',
				    resolverId: 'resolver-node-react'
				)
				rtNpmPublish (
				    // Optional tool name from Jenkins configuration
				    tool: 'npm-tool-name',
				    // Optional path to the project root. If not set, the root of the workspace is assumed as the root project path.
				    //path: 'npm-example',
				    deployerId: 'deployer-node-react'
				)
				rtPublishBuildInfo (
				    serverId: 'jfrogserver'
				    // The buildName and buildNumber below are optional. If you do not set them, the Jenkins job name is used
				    // as the build name. The same goes for the build number.
				    // If you choose to set custom build name and build number by adding the following buildName and
				    // buildNumber properties, you should make sure that previous build steps (for example rtDownload
				    // and rtIpload) have the same buildName and buildNumber set. If they don't, then these steps will not
				    // be included in the build-info.
				    //buildName: 'holyFrog',
				    //buildNumber: '42',
				)
			}
		}
	}
}

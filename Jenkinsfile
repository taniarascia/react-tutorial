pipeline {
	agent {
		//docker {
			//image 'node:13'
			label 'host'
			//args '-p 3000:3000'
		//}
	}
	environment {
	    // Path to the NodeJS home directory (not to the npm executable)
	    NODEJS_HOME = '/root/node'
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
				sh 'yarn run build'
				echo "Test production BUILD in build dir"
				//sh 'cd build'
				//sh 'yarn start & sleep 20'
				echo "webserver on: http://127.0.0.1:3000"
				//input message: 'Continue or Abort'
				echo 'production is success for deploy another server in build folder'
				rtUpload (
				    serverId: 'Artifactory-1',
				    spec: '''{
				          "files": [
				            {
				              "pattern": "build/*",
				              "target": "npm-local/node-react/"
				            }
				         ]
				    }'''
				 
				    // Optional - Associate the uploaded files with the following custom build name and build number,
				    // as build artifacts.
				    // If not set, the files will be associated with the default build name and build number (i.e the
				    // the Jenkins job name and number).
				    //buildName: 'holyFrog',
				    //buildNumber: '42'
				)
				echo "Successful"
			}
		}
	}
}

pipeline {
	agent {
		docker {
			image 'node:13'
			label 'akali'
			args '-p 3000:3000'
		}
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
<<<<<<< HEAD
				echo "successful"
=======
				echo "Successful"
>>>>>>> master
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
				sh 'cd build'
<<<<<<< HEAD
				sh 'yarn start & sleep 30'
=======
				sh 'yarn start & sleep 20'
>>>>>>> master
				echo "webserver on: http://127.0.0.1:3000"
				input message: 'Continue or Abort'
				echo 'production is success for deploy another server in build folder'
				echo "Successful"
			}
		}
	}
}
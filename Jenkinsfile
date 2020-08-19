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
			steps {
				echo "Test project in development"
				sh 'yarn start & sleep 30 '
				sh 'echo &! > .pidfile'
				echo "webserver on: http://127.0.0.1:3000"
				input message: 'Click to process to allow continue project or abort to quit'
				sh 'kill -9 $(cat .pidfile)'
			}
		}
		stage('DEPLOY') {
			steps {
				echo "Build apps for production "
				sh 'yarn run build'
				echo "Test production BUILD in build dir"
				sh 'cd build'
				sh 'yarn start & sleep 30'
				sh 'echo &! > .pidfile'
				echo "webserver on: http://127.0.0.1:3000"
				input message: 'Continue or Abort'
				sh 'kill -9 $(cat .pidfile)'
				echo 'production is success for deploy another server in build folder'
			}
		}
	}
}
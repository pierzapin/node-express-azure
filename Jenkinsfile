pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:6-alpine'
    }

  }
  stages {
    stage('Stage1') {
      steps {
        sleep(time: 1000, unit: 'MICROSECONDS')
      }
    }
  }
}
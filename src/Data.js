const array = [
    {
      lang: 'git',
      title: 'Iniciar Repositorio GitHub',
      cmd: ['git init', 'git add .', 'git commit -m "Initial commit"', 'git remote add origin https://github.com/USER/REPOSITORY.git', 'git push -u origin master']
    },
    {
      lang: 'react',
      title: 'Crear proyecto',
      cmd: ['npx create-react-app my-app', 'cd my-app', 'npm start']
    },
    {
      lang: 'vue',
      title: 'Crear vue app',
      cmd: ['vue create appname']
    },
    {
      lang: 'vue',
      title: 'Ejecutar servidor local',
      cmd: ['npm run serve']
    },
    {
      lang: 'vue',
      title: 'Construir app en directorio dist',
      cmd: ['npm run build']
    },
    {
      lang: 'firebase',
      title: 'Iniciar Firebase',
      cmd: ['firebase init', 'firebase login']
    },
    {
      lang: 'firebase',
      title: 'Deploy Hosting',
      cmd: ['firebase deploy']
    },
    {
      lang: 'terminal',
      title: 'Buscar Aplicaciones con Snap',
      cmd: ['snap search appname']
    },
    {
      lang: 'terminal',
      title: 'Ver si está instalado el demon Snap',
      cmd: ['sudo systemctl status snapd']
    },
    {
      lang: 'terminal',
      title: 'Instalar app con Snap',
      cmd: ['sudo snap install appname']
    },
    {
      lang: 'terminal',
      title: 'Actualizar app con Snap',
      cmd: ['snap refresh']
    },
    {
      lang: 'terminal',
      title: 'Eliminar app con Snap',
      cmd: ['sudo snap remove appname']
    },
  ]

  export default array
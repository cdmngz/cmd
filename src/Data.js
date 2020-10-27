const array = [
    {
      lang: 'git',
      title: 'Iniciar Repositorio GitHub',
      code: ['git init', 'git add .', 'git commit -m "Initial commit"', 'git remote add origin https://github.com/USER/REPOSITORY.git', 'git push -u origin master']
    },
    {
      lang: 'react',
      title: 'Crear proyecto',
      code: ['npx create-react-app my-app', 'cd my-app', 'npm start']
    },
    {
      lang: 'vue',
      title: 'Crear vue app',
      code: ['vue create appname']
    },
    {
      lang: 'vue',
      title: 'Ejecutar servidor local',
      code: ['npm run serve']
    },
    {
      lang: 'vue',
      title: 'Construir app en directorio dist',
      code: ['npm run build']
    },
    {
      lang: 'firebase',
      title: 'Iniciar Firebase',
      code: ['firebase init', 'firebase login']
    },
    {
      lang: 'firebase',
      title: 'Deploy Hosting',
      code: ['firebase deploy']
    },
    {
      lang: 'terminal',
      title: 'Buscar Aplicaciones con Snap',
      code: ['snap search appname']
    },
    {
      lang: 'terminal',
      title: 'Ver si está instalado el demon Snap',
      code: ['sudo systemctl status snapd']
    },
    {
      lang: 'terminal',
      title: 'Instalar app con Snap',
      code: ['sudo snap install appname']
    },
    {
      lang: 'terminal',
      title: 'Actualizar app con Snap',
      code: ['snap refresh']
    },
    {
      lang: 'terminal',
      title: 'Eliminar app con Snap',
      code: ['sudo snap remove appname']
    },
  ]

  export default array
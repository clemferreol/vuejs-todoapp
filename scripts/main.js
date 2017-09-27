{
  'use strict';

  new Vue ({

    //L'élément définissant le périmètre
    //d'action de l'application vue.js
    el : 'main#app',
    //Modèle de données de l'application
    data : {
      tasks : [
          {title : "Faire du sport", isDone : true},
          {title : "Ne pas manger comme un porc", isDone : false},
          {title : "Donner mon repas aux chiens", isDone : false}
      ],
    },
  });
}
// autre manière remaining : return this.tasks.filter(task => !task.isDone).length;

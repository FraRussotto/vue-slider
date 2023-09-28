const { createApp } = Vue;

createApp({
  data(){

    // In return inseriamo l'array con gli oggetti forniti.
    return{
      games:[
        {
          image: 'img/01.webp',
          title: 'Marvel\'s Spiderman Miles Morale',
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
        }, 
        {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
        }, 
        {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
        }, 
        {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
        }, 
        {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
        }
      ],

      count: 0,
      direction: true,
      clock: 0
    }
  },

  // Aggiungiamo in methods una funzione che attraverso un flag, varia il valore di count che poi andremo a eguagliare ad index in modo da mostrare l'immagine.

  methods:{
    nextPrev(isNext){
      isNext ? this.count++ : this.count--;
      
      if(this.count === this.games.length){
        this.count = 0;
      }else if(this.count < 0){
        this.count = this.games.length - 1;
      }
      console.log(this.count);
    }
  },
    automaticSlide(){
      this.clock = setInterval(() => {
        this.direction ? this.count++ : this.count--;
      
        if(this.count === this.games.length){
          this.count = 0;
        }else if(this.count < 0){
          this.count = this.games.length - 1;
        }
      }, 1500)
    },

// Attravero la funzione mounted che carica il suo contenuto al caricamento della pagina, inseriamo lo slider automatico.
    mounted(){
        this.clock = setInterval(() => {
          this.direction ? this.count++ : this.count--;
        
          if(this.count === this.games.length){
            this.count = 0;
          }else if(this.count < 0){
            this.count = this.games.length - 1;
          }
        }, 2000)
    }
  
}).mount('#app')
/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
  /**
   * Précharge les assets
   */
  preload() {
    //bg 2 (tout au fond et très flou)
    // this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
    //this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
    this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');
    this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');
    this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
    this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');

    //bg 1 (gris légèrement flou)
    this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
    this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
    this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
    this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
    this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');

    //ground (premier plan noir)
    this.load.image('gMid', 'assets/level/ground/g-mid.png');
    this.load.image('gRight', 'assets/level/ground/g-right.png');
    this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
    this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
    this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
    this.load.image('gStone2', 'assets/level/ground/g-stone-2.png');
    this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
    this.load.image('gLeft', 'assets/level/ground/g-left.png');
    this.load.image('gWoodenbridge', 'assets/level/ground/g-wooden-bridge.png');
    this.load.image('gBox2', 'assets/level/ground/g-box-2.png');
    this.load.image('gWater', 'assets/level/ground/g-water.png');
    this.load.image('gSpike1', 'assets/level/ground/g-spike-1.png');
    this.load.image('gLiane1', 'assets/level/ground/g-vine-a.png');
    this.load.image('gLiane2', 'assets/level/ground/g-vine-b.png');
    this.load.image('gLiane3', 'assets/level/ground/g-vine-c.png');
    this.load.image('gStone3', 'assets/level/ground/g-stone-3.png');
    this.load.image('gGrass2', 'assets/level/ground/g-grass-2.png');
    this.load.image('gFellenTree1', 'assets/level/ground/g-fellen-tree-1.png');
    this.load.image('z11', 'assets/level/ground/z11.png');
    this.load.image('frame1', 'assets/level/filters/bloody/frame1.png');

    //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
    // ALGO : ceci est une boucle
    for (let i = 1; i <= 5; i++) {
      this.load.image('g-grass-' + i, 'assets/level/ground/g-grass-' + i + '.png');

      for (let i = 1; i <= 10; i++) {
        this.load.image('Layer-' + i, 'Characters/boy/boy_style_1/PNG/idle/Layer-' + i + '.png');


      }

      //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
      this.load.image('filterFilm1', 'assets/level/filters/film/frame-1.png');
      this.load.image('filterFilm2', 'assets/level/filters/film/frame-2.png');
      this.load.image('filterFilm3', 'assets/level/filters/film/frame-3.png');

      //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
      this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

    }
  }
  /**
   * Crée la scène
   * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
   * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
   */
  create(){

    /**
     * Fond très clair avec une trame
     * @type {Phaser.GameObjects.Sprite}
     */
    let bgAnimationA=this.add.sprite(0,0, 'bg-animation-a').setOrigin(0,0);

    //--------------background 2 (tout au fond et flou)--------------------

    /**
     * contient tous les éléments du background 2 (gris clair très flou)
     * @type {Phaser.GameObjects.Container}
     * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
     */
    this.bg2Container=this.add.container(0,0);
    /**
     * Terrain dans bg2
     * @type {Phaser.GameObjects.Image}
     */
    let bg2Terrain2=this.add.image(-300,60, 'bg2-terrain-2').setOrigin(0,0);
    this.bg2Container.add(bg2Terrain2);
    bg2Terrain2.scale=1.2
    // coline D
    let bg2Terrain1=this.add.image(650,140, 'bg2-terrain-1').setOrigin(0,0);
    this.bg2Container.add(bg2Terrain1);



    /**
     * Arbre dans bg2
     * @type {Phaser.GameObjects.Image}
     */
    let bg2Tree2=this.add.image(350,-40, 'bg2-tree-2').setOrigin(0,0);
    this.bg2Container.add(bg2Tree2);
    bg2Tree2.angle=0; //pencher l'arbre de -5 degrès
    bg2Tree2.scale=0.5

    let bg2Tree3=this.add.image(750,-20, 'bg2-tree-3').setOrigin(0,0);
    this.bg2Container.add(bg2Tree3);
    bg2Tree3.angle=-5; //pencher l'arbre de -5 degrès
    bg2Tree3.scale=0.7
    //--------------background 1 (gris) --------------------

    /**
     * contient tous les éléments du background 1 (gris)
     * @type {Phaser.GameObjects.Container}
     */
    this.bg1Container=this.add.container(0,0);
    /**
     * Terrain
     * @type {Phaser.GameObjects.Image}
     */
    let bg1Terrain3=this.add.image(-430,180, 'bg1-terrain-3').setOrigin(0,0);
    this.bg1Container.add(bg1Terrain3);

    let bg1Terrain1=this.add.image(660,330, 'bg1-terrain-1').setOrigin(0,0);
    this.bg1Container.add(bg1Terrain1);
    bg1Terrain1.scale=0.4

    let bg1Tree3=this.add.image(130,-100, 'bg1-tree-3').setOrigin(0,0);
    this.bg1Container.add(bg1Tree3);
    bg1Tree3.angle=0; //pencher l'arbre de -5 degrès
    bg1Tree3.scale=0.6

    let bg1Tree1=this.add.image(-20,-50, 'bg1-tree-1').setOrigin(0,0);
    this.bg1Container.add(bg1Tree3);
    bg1Tree1.angle=0; //pencher l'arbre de -5 degrès
    bg1Tree1.scale=0.6

    let bg1terrain4=this.add.image(-40,480, 'bg1-terrain-4').setOrigin(0,0);
    this.bg1Container.add(bg1terrain4);
    bg1terrain4.angle=-5; //pencher l'arbre de -5 degrès




    //-------------ground (premier plan noir)---------------------------

    /**
     * contient tous les éléments du premier plan (noir)
     * @type {Phaser.GameObjects.Container}
     */
    this.groundContainer=this.add.container(0,0);

    /**
     * Arbre
     * @type {Phaser.GameObjects.Image}
     */
    let spike1=this.add.image(445,445, 'gSpike1').setOrigin(0,0);
    this.groundContainer.add(spike1);
    spike1.scale=1

    let spike1a=this.add.image(600,445, 'gSpike1').setOrigin(0,0);
    this.groundContainer.add(spike1a);
    spike1a.scale=1


    let water=this.add.image(440,630, 'gWater').setOrigin(0,1);
    this.groundContainer.add(water);
    water.scale=1

    let tree2=this.add.image(250,353, 'gTree2').setOrigin(0,1);
    this.groundContainer.add(tree2);
    tree2.scale=0.6

    let tree2g=this.add.image(1,353, 'gTree2').setOrigin(0,1);
    this.groundContainer.add(tree2g);
    tree2g.scale=0.8
    tree2g.flipX=true

    let stone4=this.add.image(350,380, 'gStone4').setOrigin(0,1);
    this.groundContainer.add(stone4);
    stone4.scale=0.8

    let stone2=this.add.image(345,362, 'gStone2').setOrigin(0,1);
    this.groundContainer.add(stone2);

    let mushroom1=this.add.image(120,350, 'gMushroom1').setOrigin(0,1);
    this.groundContainer.add(mushroom1);
    mushroom1.scale=1
    mushroom1.angle=10

    let left=this.add.image(800,380, 'gLeft').setOrigin(0,0);
    this.groundContainer.add(left);
    left.scale=0.9

    let tree1=this.add.image(850,400, 'gTree1').setOrigin(0,1);
    this.groundContainer.add(tree1);
    tree1.scale=0.9
    tree1.angle=-10
    tree1.flipX=true

    let woodenbridge=this.add.image(420,300, 'gWoodenbridge').setOrigin(0,0);
    this.groundContainer.add(woodenbridge);
    woodenbridge.scale=0.8

    let stone4a=this.add.image(810,395, 'gStone4').setOrigin(0,1);
    this.groundContainer.add(stone4a);
    stone4a.scale=0.8

    let box2=this.add.image(515,293, 'gBox2').setOrigin(0,0);
    this.groundContainer.add(box2);
    box2.scale=0.6
    box2.angle=5

    // lianne 1
    let vine101=this.add.image(500,-10, 'gLiane3').setOrigin(0,0);
    this.groundContainer.add(vine101);
    vine101.scale=0.7

    let vine102=this.add.image(500,20, 'gLiane1').setOrigin(0,0);
    this.groundContainer.add(vine102);
    vine102.scale=0.7

    let vine103=this.add.image(505,50, 'gLiane2').setOrigin(0,0);
    this.groundContainer.add(vine103);
    vine103.scale=0.7

    let vine104=this.add.image(505,80, 'gLiane2').setOrigin(0,0);
    this.groundContainer.add(vine104);
    vine104.scale=0.7

    let vine105=this.add.image(500,110, 'gLiane3').setOrigin(0,0);
    this.groundContainer.add(vine105);
    vine105.scale=0.7

    let vine106=this.add.image(500,140, 'gLiane1').setOrigin(0,0);
    this.groundContainer.add(vine106);
    vine106.scale=0.7

    let vine107=this.add.image(505,170, 'gLiane2').setOrigin(0,0);
    this.groundContainer.add(vine107);
    vine107.scale=0.7

    // lianne 2
    let vine201=this.add.image(550,-10, 'gLiane3').setOrigin(0,0);
    this.groundContainer.add(vine201);
    vine201.scale=0.7

    let vine202=this.add.image(550,20, 'gLiane1').setOrigin(0,0);
    this.groundContainer.add(vine202);
    vine202.scale=0.7

    let vine203=this.add.image(555,50, 'gLiane2').setOrigin(0,0);
    this.groundContainer.add(vine203);
    vine203.scale=0.7

    let vine204=this.add.image(555,80, 'gLiane2').setOrigin(0,0);
    this.groundContainer.add(vine204);
    vine204.scale=0.7

    let vine205=this.add.image(950,380, 'gMid').setOrigin(0,0);
    this.groundContainer.add(vine205);
    vine205.scale=0.7

    let vine206=this.add.image(1050,380, 'gMid').setOrigin(0,0);
    this.groundContainer.add(vine206);
    vine206.scale=0.7

    let vine207=this.add.image(1150,380, 'gMid').setOrigin(0,0);
    this.groundContainer.add(vine207);
    vine207.scale=0.7

    let vine208=this.add.image(1200,380, 'gRight').setOrigin(0,0);
    this.groundContainer.add(vine208);
    vine208.scale=0.7

    let vine209=this.add.image(880,350, 'gStone3').setOrigin(0,0);
    this.groundContainer.add(vine209);
    vine209.scale=1.5

    let vine210=this.add.image(1100,350, 'gGrass2').setOrigin(0,0);
    this.groundContainer.add(vine210);
    vine210.scale=0.7

    let vine211=this.add.image(1150,345, 'gMushroom1').setOrigin(0,0);
    this.groundContainer.add(vine211);
    vine211.scale=0.7

    let vine212=this.add.image(1250,320, 'gFellenTree1').setOrigin(0,0);
    this.groundContainer.add(vine212);
    vine212.scale=0.7
    vine212.angle=6

    let vine213=this.add.image(1530,400, 'gLeft').setOrigin(0,0);
    this.groundContainer.add(vine213);
    vine213.scale=0.7

    let vine214=this.add.image(1590,290, 'z11').setOrigin(0,0);
    this.groundContainer.add(vine214);
    vine214.scale=0.7

    let vine215=this.add.image(0,0, 'frame1').setOrigin(0,0);
    this.groundContainer.add(vine215);
    vine215.scale=1

    let Layer=this.add.image(1500,400, 'Layer-1').setOrigin(0,0);
    this.groundContainer.add(Layer);
      Layer.scale=1








    /**
     * Terrain 1
     * @type {Phaser.GameObjects.Image}
     */
      //ici on va calculer les positions

    let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
    this.groundContainer.add(gMid1);




    /**
     * Terrain 2
     * @type {Phaser.GameObjects.Image}
     */
    let gMid2=this.add.image(50,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
    this.groundContainer.add(gMid2);
    /**
     * Terrain 3
     * @type {Phaser.GameObjects.Image}
     */
    let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
    this.groundContainer.add(gMid3);

    /**
     * De l'herbe en textures qui se répète
     * @type {Phaser.GameObjects.TileSprite}
     */
    let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
    this.groundContainer.add(grass);
    /**
     * encore de l'herbe
     * @type {Phaser.GameObjects.TileSprite}
     */
    let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
    this.groundContainer.add(grass2);

    this.idle = this.add.sprite(250, 0, 'Layer-1').setOrigin(0,0);
    console.log(frames)
    this.anims.create({
      key: 'Idle',
      frames: this.getFrames("Layer-",10),
      frameRate: 12,
      repeat: -1
    });
    this.idle.play('Idle');
    /**
     * filtre type film au premier plan
     * @type {Phaser.GameObjects.Sprite}
     */
    this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
    //animation de 3 images
    this.anims.create({
      key: 'film',
      frames: [
        {key:'filterFilm1'},
        {key:'filterFilm2'},
        {key:'filterFilm3'},
      ],
      frameRate: 16,
      repeat: -1 // -1 correspond a l'infini
    });
    this.filterFilm.play('film');

    //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

    //gestion du parallaxe
    /**
     * Vitesse de déplacement du décor
     * @type {number}
     */
    this.speed=0;
    //initialise ce qui se passe avec le clavier
    this.initKeyboard();
    // Définit l'espace de déplacement de la caméra
    this.cameras.main.setBounds(0, 0, 2000, 540);
    //définit à quelles vitesse se déplacent nos différents plans
    bgAnimationA.scrollFactorX=0;
    this.filterFilm.scrollFactorX=0;
    this.bg2Container.scrollFactorX=0.2;
    this.bg1Container.scrollFactorX=0.4;
    this.groundContainer.scrollFactorX=1;
  }

  /**
   * Définit ce qui se passe quand on appuie ou relache une touche du clavier
   * ALGO : ceci est une fonction ou méthode
   */
  initKeyboard(){
    let me=this;
    this.input.keyboard.on('keydown', function(kevent)
    {
      switch (kevent.keyCode) // = if , dans le cas ou tel touche est pressé
      {
        case Phaser.Input.Keyboard.KeyCodes.RIGHT:
          me.speed=5;
          break;
        case Phaser.Input.Keyboard.KeyCodes.LEFT:
          me.speed=-5;
          break;
      }
    });
    this.input.keyboard.on('keyup', function(kevent)
    {
      switch (kevent.keyCode)
      {
        case Phaser.Input.Keyboard.KeyCodes.RIGHT:
        case Phaser.Input.Keyboard.KeyCodes.LEFT:
          me.speed=0;
          break;
      }
    });
  }

  /**
   * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
   */
  update(){
    //déplacement de la caméra
    this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

    //petit effet de vibrance sur le filtre film au tout premier plan
    this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
  }


}


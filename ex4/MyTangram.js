/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        //this.initMaterials(scene);
        this.initTextures();
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);


        }
        /*initMaterials(scene){
        //green 
        this.green = new CGFappearance(scene);
        this.green.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.green.setDiffuse(0, 255/255, 0, 1.0);
        this.green.setSpecular(0, 255/255, 0, 1.0);
        this.green.setShininess(20.0);
        //this.green.loadTexture('images/tangram.png');
        //this.green.setTextureWrap('REPEAT', 'REPEAT');
        //purple
        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.purple.setDiffuse(150/225, 80/255, 190/255, 1.0);
        this.purple.setSpecular(150/225, 80/255, 190/255, 1.0);
        this.purple.setShininess(20.0);
        //this.purple.loadTexture('images/tangram.png');
        //this.purple.setTextureWrap('REPEAT', 'REPEAT');
        //red   
        this.red = new CGFappearance(scene);
        this.red.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.red.setDiffuse(255/225, 27/255, 27/255, 1.0);
        this.red.setSpecular(255/225, 27/255, 27/255, 1.0);
        this.red.setShininess(20.0);
        //this.red.loadTexture('images/tangram.png');
        //this.red.setTextureWrap('REPEAT', 'REPEAT');
        //pink
        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.pink.setDiffuse(255/225, 155/255, 207/255, 1.0);
        this.pink.setSpecular(255/225, 155/255, 207/255, 1.0);
        this.pink.setShininess(20.0);
        //this.pink.loadTexture('images/tangram.png');
        //this.pink.setTextureWrap('REPEAT', 'REPEAT');
        //yellow
        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.yellow.setDiffuse(255/225, 255/255, 0, 1.0);
        this.yellow.setSpecular(255/225, 255/255, 0, 1.0);
        this.yellow.setShininess(20.0);
        //this.yellow.loadTexture('images/tangram.png');
        //this.yellow.setTextureWrap('REPEAT', 'REPEAT');
        //blue
        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.blue.setDiffuse(0, 155/255, 255/255, 1.0);
        this.blue.setSpecular(0, 155/255, 255/255, 1.0);
        this.blue.setShininess(20.0);
        //this.blue.loadTexture('images/tangram.png');
        //this.blue.setTextureWrap('REPEAT', 'REPEAT');
        //orange
        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.orange.setDiffuse(255/225, 155/255, 0, 1.0);
        this.orange.setSpecular(255/225, 155/255, 0, 1.0);
        this.orange.setShininess(20.0);      
        //this.orange.loadTexture('images/tangram.png');
        //this.orange.setTextureWrap('REPEAT', 'REPEAT');
        



        
        }*/
        initTextures(){
        //tangram material 
        this.tangram = new CGFappearance(this.scene);
        this.tangram.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangram.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangram.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangram.setShininess(10.0);
        this.tangram.loadTexture('images/tangram.png');
        this.tangram.setTextureWrap('REPEAT', 'REPEAT');

        }
	display(){
        this.tangram.apply();
        this.scene.scale(0.3,0.3,0.3);

        //quadrado 
        this.scene.pushMatrix();
    
        var trans= [1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    Math.cos(Math.PI/4.0), 3*Math.cos(Math.PI/4.0), 0, 1];
        this.scene.multMatrix(trans);

        var rot = [Math.cos(Math.PI/4.0), Math.sin(Math.PI/4.0), 0, 0,
            -Math.sin(Math.PI/4.0), Math.cos(   Math.PI/4.0), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1];

        this.scene.multMatrix(rot);
       // this.green.apply(); // point 5
        this.diamond.display();//point 6
        this.scene.popMatrix();

        //triangulo roxo
        this.scene.pushMatrix();
        
        this.scene.translate(Math.cos(Math.PI/4.0)*3,Math.cos(Math.PI/4.0)*3,0);
        this.scene.rotate(3*Math.PI/4.0,0,0,1);
       // this.purple.apply();

        this.trianglesmall.display();

        this.scene.popMatrix();

        //triangulo vermelho
        this.scene.pushMatrix();

        this.scene.translate( Math.cos(Math.PI/4.0), Math.cos(Math.PI/4.0),0);
        this.scene.rotate(Math.PI/4.0,0,0,1);
        //this.red.apply();

        this.trianglesmall.display();

        this.scene.popMatrix();

        //triangulo rosa  
        this.scene.pushMatrix();

        this.scene.translate(2*Math.cos(Math.PI/4.0),0,0);
        this.scene.rotate(-Math.PI/4.0,0,0,1);
        //this.pink.apply();

        this.triangle.display();

        this.scene.popMatrix();
        
        //Paralelograma amarelo
        this.scene.pushMatrix();

        this.scene.translate(Math.cos(Math.PI/4.0)*2.0,-Math.cos(Math.PI/4.0)*4.0,0);
        this.scene.rotate(3*Math.PI/4.0,0,0,1);
        this.scene.scale(1,-1,1); 
        //this.yellow.apply();

        this.parallelogram.display();

        this.scene.popMatrix();

        //triangulo laranja
        this.scene.pushMatrix();

        this.scene.translate( -Math.cos(Math.PI/4.0)+0.1,-4.0*Math.cos(Math.PI/4.0)+0.025,0);;
        //this.orange.apply();
        this.scene.rotate(Math.PI/2.0,0,0,1);
        this.trianglebig.display();
        
        this.scene.popMatrix();

        //triangulo azul

        this.scene.pushMatrix();
        this.scene.translate(-Math.cos(Math.PI/4.0)+0.1,-4.0*Math.cos(Math.PI/4.0)+0.025,0);
        this.scene.rotate(-Math.PI/2.0,0,0,1);
        //this.blue.apply();

        this.trianglebig.display();
        
        this.scene.popMatrix();        
        }
        
        enableNormalViz(){
                this.triangle.enableNormalViz();
                this.trianglebig.enableNormalViz();
                this.trianglesmall.enableNormalViz();
                this.diamond.enableNormalViz();
                this.parallelogram.enableNormalViz();
        }

        disableNormalViz(){
                this.triangle.disableNormalViz();
                this.trianglebig.disableNormalViz();
                this.trianglesmall.disableNormalViz();
                this.diamond.disableNormalViz();
                this.parallelogram.disableNormalViz();
        }
        updateBuffers(complexity){
                // reinitialize buffers
                this.initBuffers();
                this.initNormalVizBuffers();
        }
}


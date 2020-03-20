/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {

	constructor(scene) {
        super(scene);
        this.initTextures();
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangleSmallRed = new MyTriangleSmall(this.scene,"red");
        this.triangleSmallPurple = new MyTriangleSmall(this.scene,"purple");
        this.triangleBigBlue = new MyTriangleBig(this.scene,"blue");
        this.triangleBigOrange = new MyTriangleBig(this.scene,"orange");
        }

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

        //Green Square
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
       // this.green.apply();
        this.diamond.display();
        this.scene.popMatrix();


        //Small Purple Triangle
        this.scene.pushMatrix();
        this.scene.translate(Math.cos(Math.PI/4.0)*3,Math.cos(Math.PI/4.0)*3,0);
        this.scene.rotate(3*Math.PI/4.0,0,0,1);
       // this.purple.apply();
        this.triangleSmallPurple.display();
        this.scene.popMatrix();


        //Small Red Triangle
        this.scene.pushMatrix();
        this.scene.translate( Math.cos(Math.PI/4.0), Math.cos(Math.PI/4.0),0);
        this.scene.rotate(Math.PI/4.0,0,0,1);
        //this.red.apply();
        this.triangleSmallRed.display();
        this.scene.popMatrix();


        //Pink Triangle 
        this.scene.pushMatrix();
        this.scene.translate(2*Math.cos(Math.PI/4.0),0,0);
        this.scene.rotate(-Math.PI/4.0,0,0,1);
        //this.pink.apply();
        this.triangle.display();
        this.scene.popMatrix();

        
        //Yellow Parallelogram
        this.scene.pushMatrix();
        this.scene.translate(Math.cos(Math.PI/4.0)*2.0,-Math.cos(Math.PI/4.0)*4.0,0);
        this.scene.rotate(3*Math.PI/4.0,0,0,1);
        this.scene.scale(1,-1,1); 
        //this.yellow.apply();
        this.parallelogram.display();
        this.scene.popMatrix();


        //Big Orange Triangle
        this.scene.pushMatrix();
        this.scene.translate( -Math.cos(Math.PI/4.0)+0.1,-4.0*Math.cos(Math.PI/4.0)+0.025,0);;
        //this.orange.apply();
        this.scene.rotate(Math.PI/2.0,0,0,1);
        this.triangleBigOrange.display();
        this.scene.popMatrix();


        //Big Blue Triangle
        this.scene.pushMatrix();
        this.scene.translate(-Math.cos(Math.PI/4.0)+0.1,-4.0*Math.cos(Math.PI/4.0)+0.025,0);
        this.scene.rotate(-Math.PI/2.0,0,0,1);
        //this.blue.apply();
        this.triangleBigBlue.display();
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


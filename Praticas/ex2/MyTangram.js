/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);

	}
	display(){
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
        this.scene.setDiffuse(0, 255/255, 0, 0);
        this.diamond.display();
        this.scene.popMatrix();

        //triangulo roxo
        this.scene.pushMatrix();
        
        this.scene.translate(Math.cos(Math.PI/4.0)*3,Math.cos(Math.PI/4.0)*3,0);
        this.scene.rotate(3*Math.PI/4.0,0,0,1);
        this.scene.setDiffuse(150/255, 80/255, 190/255, 0);

        this.trianglesmall.display();

        this.scene.popMatrix();

        //triangulo vermelho
        this.scene.pushMatrix();

        this.scene.translate( Math.cos(Math.PI/4.0), Math.cos(Math.PI/4.0),0);
        this.scene.rotate(Math.PI/4.0,0,0,1);
        this.scene.setDiffuse(255/255, 27/255, 27/255, 0);

        this.trianglesmall.display();

        this.scene.popMatrix();

        //triangulo rosa  
        this.scene.pushMatrix();

        this.scene.translate(2*Math.cos(Math.PI/4.0),0,0);
        this.scene.rotate(-Math.PI/4.0,0,0,1);
        this.scene.setDiffuse(255/255, 155/255, 207/255, 0);

        this.triangle.display();

        this.scene.popMatrix();
        
        //Paralelograma amarelo
        this.scene.pushMatrix();

        this.scene.translate(Math.cos(Math.PI/4.0)*2.0,-Math.cos(Math.PI/4.0)*4.0,0);
        this.scene.rotate(3*Math.PI/4.0,0,0,1);
        this.scene.scale(1,-1,1); 
        this.scene.setDiffuse(255/255, 255/255, 0, 0);

        this.parallelogram.display();

        this.scene.popMatrix();

        //triangulo laranja
        this.scene.pushMatrix();

        this.scene.translate( -Math.cos(Math.PI/4.0)+0.1,-4.0*Math.cos(Math.PI/4.0)+0.025,0);;
        this.scene.setDiffuse(255/255, 155/255, 0, 0);
        this.scene.rotate(Math.PI/2.0,0,0,1);
        this.trianglebig.display();
        
        this.scene.popMatrix();

        //triangulo azul

        this.scene.pushMatrix();
        this.scene.translate(-Math.cos(Math.PI/4.0)+0.1,-4.0*Math.cos(Math.PI/4.0)+0.025,0);
        this.scene.rotate(-Math.PI/2.0,0,0,1);
        this.scene.setDiffuse(0, 155/255, 255/255, 0);

        this.trianglebig.display();
        
        this.scene.popMatrix();
        
	}
}


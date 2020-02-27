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
        this.diamond.display();
        this.scene.popMatrix();

        //triangulo roxo
        this.scene.pushMatrix();
        trans= [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            Math.cos(Math.PI/4.0)*3, 3*Math.cos(Math.PI/4.0), 0, 1];
        this.scene.multMatrix(trans); 

        
        rot =[Math.cos(3*Math.PI/4.0), Math.sin(3*Math.PI/4.0), 0, 0,
            -Math.sin(3*Math.PI/4.0), Math.cos(3*Math.PI/4.0), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1];
        
        this.scene.multMatrix(rot);
 
        this.trianglesmall.display();
        this.scene.popMatrix();

        //triangulo vermelho
        this.scene.pushMatrix();
        trans= [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            Math.cos(Math.PI/4.0),Math.cos(Math.PI/4.0), 0, 1];
        this.scene.multMatrix(trans); 

        
        rot =[Math.cos(Math.PI/4.0), Math.sin(Math.PI/4.0), 0, 0,
            -Math.sin(Math.PI/4.0), Math.cos(Math.PI/4.0), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1];
        
        this.scene.multMatrix(rot);

        this.trianglesmall.display();
        this.scene.popMatrix();

        //triangulo rosa  
        this.scene.pushMatrix();
        trans= [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            2*Math.cos(Math.PI/4.0),0, 0, 1];
        this.scene.multMatrix(trans); 

        
        rot =[Math.cos(-Math.PI/4.0), Math.sin(-Math.PI/4.0), 0, 0,
            -Math.sin(-Math.PI/4.0), Math.cos(-Math.PI/4.0), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1];
        
        this.scene.multMatrix(rot);

        this.triangle.display();
        this.scene.popMatrix();
        
        //Paralelograma amarelo
        this.scene.pushMatrix();
        trans = [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            Math.cos(Math.PI/4.0)*2.0, -Math.cos(Math.PI/4.0)*4.0, 0, 1];
 
        this.scene.multMatrix(trans);
 
           
        rot = [Math.cos(3*Math.PI/4.0), Math.sin(3*Math.PI/4.0), 0, 0,
            -Math.sin(3*Math.PI/4.0), Math.cos(3*Math.PI/4.0), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1];
        this.scene.multMatrix(rot);
       var sca = [1, 0, 0, 0,
            0, -1, 0, 0,
            0, 0, 1, 0,
             0, 0, 0, 1]
      this.scene.multMatrix(sca);
        
        this.parallelogram.display();
        this.scene.popMatrix();

        //triangulo laranja
        this.scene.pushMatrix();
        trans= [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -Math.cos(Math.PI/4.0)+0.1,-4.0*Math.cos(Math.PI/4.0)+0.025, 0, 1];
        this.scene.multMatrix(trans);

        
        rot =[Math.cos(Math.PI/2.0), Math.sin(Math.PI/2.0), 0, 0,
            -Math.sin(Math.PI/2.0), Math.cos(Math.PI/2.0), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1];
        
        this.scene.multMatrix(rot);

        this.trianglebig.display();
        
        this.scene.popMatrix();

        //triangulo azul
        this.scene.pushMatrix();
        trans= [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -Math.cos(Math.PI/4.0)+0.1,-4.0*Math.cos(Math.PI/4.0)+0.025, 0, 1];
        this.scene.multMatrix(trans);

        
        rot =[Math.cos(-Math.PI/2.0), Math.sin(-Math.PI/2.0), 0, 0,
            -Math.sin(-Math.PI/2.0), Math.cos(-Math.PI/2.0), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1];
        
        this.scene.multMatrix(rot);


        this.trianglebig.display();
        
        this.scene.popMatrix();
        
	}
}


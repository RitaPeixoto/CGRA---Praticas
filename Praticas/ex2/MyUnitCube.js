/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5, -0.5, 0.5,	    //0, baixo, direita, frente
			0.5, -0.5, -0.5,    //1, baixo, direita, tras
			-0.5, -0.5, -0.5,   //2, baixo, esquerda, tras
            -0.5, -0.5, 0.5,    //3, baixo, esquerda, frente
             0.5, 0.5, 0.5,        //4
            0.5, 0.5, -0.5,     //5
			-0.5, 0.5, -0.5,    //6
            -0.5, 0.5, 0.5		//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 4,    //face direita
            1, 5, 4,    //face direita
            1, 2, 5,    //face tras
            2, 6, 5,    //face tras
            6, 2, 7,    //face esquerda
            2, 3, 7,    //face esquerda
            3, 0, 7,    //face frente
            0, 4, 7,    //face frente
            6, 7, 4,    //face cima
            4, 5, 6,    //face cima
            2, 3, 0,    //face baixo
            0, 1, 2     //face baixo
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}


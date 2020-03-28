#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main() {

	vec4 color = texture2D(uSampler, vTextureCoord);

	vec4 colorSepia = color;
    //only changes the RGB components to the ones in the worksheet : L = 0.299R + 0.587G + 0.114B.
	colorSepia.r = color.r * 0.299 + color.g *0.587 + color.b * 0.144;
	colorSepia.g = color.r * 0.299 + color.g *0.587 + color.b * 0.144;
	colorSepia.b = color.r * 0.299 + color.g *0.587 + color.b * 0.144;

	gl_FragColor = colorSepia;
}
function main(){
    //akses kanvas atau media untuk menggambar
    var canvas = document.getElementById("myCanvas");
    //siapkan tools untuk menggambar --> bolpen, pensil, kuas, dsb
    var context = canvas.getContext("webgl");

    // coordinate and size
    var vertexShaderCode = `
    void main(){
        // x, y, z, multiplier
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        gl_PointSize = 10.0;
    }`;

    // compile titik
    var vertexShader = context.createShader(context.VERTEX_SHADER);
    context.shaderSource(vertexShader, vertexShaderCode);
    context.compileShader(vertexShader);

    // color
    var fragmentShaderCode = `
    void main(){
        // r, g, b, opacity
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    `;

    //compile color
    var fragmentShader = context.createShader(context.FRAGMENT_SHADER);
    context.shaderSource(fragmentShader, fragmentShaderCode);
    context.compileShader(fragmentShader);

    //membuat package program agar data bisa dieksekusi
    // to show
    var shaderProgram = context.createProgram();
    // load
    context.attachShader(shaderProgram, vertexShader);
    context.attachShader(shaderProgram, fragmentShader);
    // join
    context.linkProgram(shaderProgram);
    context.useProgram(shaderProgram);

    // clear and color background
    context.clearColor(0.0, 0.0, 1.0, 1.0);
    context.clear(context.COLOR_BUFFER_BIT);

    context.drawArrays(context.POINTS, 0, 1);
}
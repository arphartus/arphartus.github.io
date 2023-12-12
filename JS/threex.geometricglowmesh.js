var THREEx	= THREEx || {}

THREEx.GeometricGlowMesh	= function(mesh, insideDilation, outsideDilation, option){
	var object3d	= new THREE.Object3D

	insideDilation = insideDilation || 0.01;
	outsideDilation = outsideDilation || 0.1;
	
	var geometry	= mesh.geometry.clone()
	THREEx.dilateGeometry(geometry, insideDilation);
	geometry.mergeVertices();

	var material	= THREEx.createAtmosphereMaterial()
	material.uniforms.glowColor.value	= new THREE.Color('cyan')
	material.uniforms.coeficient.value	= 1.1
	material.uniforms.power.value		= 1.4
	var insideMesh	= new THREE.Mesh(geometry, material );
	object3d.add( insideMesh );

	if(option == "double"){
		var geometry	= mesh.geometry.clone()
		THREEx.dilateGeometry(geometry, -1*insideDilation);
		geometry.mergeVertices();
		var insideMesh2	= new THREE.Mesh(geometry, material );
		object3d.add( insideMesh2 );
	};

	var geometry	= mesh.geometry.clone()
	THREEx.dilateGeometry(geometry, outsideDilation)
	geometry.mergeVertices();

	var material	= THREEx.createAtmosphereMaterial()
	material.uniforms.glowColor.value	= new THREE.Color('cyan')
	material.uniforms.coeficient.value	= 0.1//Glow thickness
	material.uniforms.power.value		= 1.2
	material.side	= THREE.DoubleSide
	var outsideMesh	= new THREE.Mesh( geometry, material );
	object3d.add( outsideMesh );

	if(option == "double"){
		var geometry	= mesh.geometry.clone()
		THREEx.dilateGeometry(geometry, -1*outsideDilation);
		geometry.mergeVertices();
		var outsideMesh2	= new THREE.Mesh(geometry, material );
		object3d.add( outsideMesh2 );
	};	

	// expose a few variable
	this.object3d	= object3d
	this.insideMesh	= insideMesh
	//this.insideMesh2	= insideMesh2
	this.outsideMesh= outsideMesh
}

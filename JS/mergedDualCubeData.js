let mergedDualCubeData={materialIndices:[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,2,2,2,2,0,0,0,0,5,5,5,5,1,1,1,1,4,4,4,4,3,3,3,3],faceVertexUvs:
[[{x:0.8125,y:1},{x:0.75,y:0.5},{x:0.875,y:0.6959132760153036}],[{x:0.75,y:0.5},{x:1,y:0.5},{x:0.875,y:0.6959132760153036}],[{x:1,y:0.5},{x:0.9375,y:1},{x:0.875,y:0.6959132760153036}],[{x:1.0625,y:1},{x:1,y:0.5},{x:1.125,y:0.6959132760153036}],[{x:1,y:0.5},{x:1.25,y:0.5},{x:1.125,y:0.6959132760153036}],[{x:0.25,y:0.5},{x:0.1875,y:1},{x:0.125,y:0.6959132760153036}],[{x:0.3125,y:1},{x:0.25,y:0.5},{x:0.375,y:0.6959132760153036}],[{x:0.25,y:0.5},{x:0.5,y:0.5},{x:0.375,y:0.6959132760153036}],[{x:0.5,y:0.5},{x:0.4375,y:1},{x:0.375,y:0.6959132760153036}],[{x:0.5625,y:1},{x:0.5,y:0.5},{x:0.625,y:0.6959132760153036}],[{x:0.5,y:0.5},{x:0.75,y:0.5},{x:0.625,y:0.6959132760153036}],[{x:0.75,y:0.5},{x:0.6875,y:1},{x:0.625,y:0.6959132760153036}],[{x:0.75,y:0.5},{x:0.5,y:0.5},{x:0.625,y:0.3040867239846964}],[{x:0.5,y:0.5},{x:0.5625,y:0},{x:0.625,y:0.3040867239846964}],[{x:0.6875,y:0},{x:0.75,y:0.5},{x:0.625,y:0.3040867239846964}],[{x:0.75,y:0.5},{x:0.8125,y:0},{x:0.875,y:0.3040867239846964}],[{x:0.9375,y:0},{x:1,y:0.5},{x:0.875,y:0.3040867239846964}],[{x:1,y:0.5},{x:0.75,y:0.5},{x:0.875,y:0.3040867239846964}],[{x:1,y:0.5},{x:1.0625,y:0},{x:1.125,y:0.3040867239846964}],[{x:0.1875,y:0},{x:0.25,y:0.5},{x:0.125,y:0.3040867239846964}],[{x:1.25,y:0.5},{x:1,y:0.5},{x:1.125,y:0.3040867239846964}],[{x:0.25,y:0.5},{x:0.3125,y:0},{x:0.375,y:0.3040867239846964}],[{x:0.4375,y:0},{x:0.5,y:0.5},{x:0.375,y:0.3040867239846964}],[{x:0.5,y:0.5},{x:0.25,y:0.5},{x:0.375,y:0.3040867239846964}],[{x:0,y:1},{x:0,y:0},{x:0.5,y:0.5}],[{x:0,y:0},{x:1,y:0},{x:0.5,y:0.5}],[{x:1,y:0},{x:1,y:1},{x:0.5,y:0.5}],[{x:1,y:1},{x:0,y:1},{x:0.5,y:0.5}],[{x:1,y:0},{x:1,y:1},{x:0.5,y:0.5}],[{x:1,y:1},{x:0,y:1},{x:0.5,y:0.5}],[{x:0,y:1},{x:0,y:0},{x:0.5,y:0.5}],[{x:0,y:0},{x:1,y:0},{x:0.5,y:0.5}],[{x:1,y:0},{x:1,y:1},{x:0.5,y:0.5}],[{x:1,y:1},{x:0,y:1},{x:0.5,y:0.5}],[{x:0,y:1},{x:0,y:0},{x:0.5,y:0.5}],[{x:0,y:0},{x:1,y:0},{x:0.5,y:0.5}],[{x:1,y:0},{x:1,y:1},{x:0.5,y:0.5}],[{x:1,y:1},{x:0,y:1},{x:0.5,y:0.5}],[{x:0,y:1},{x:0,y:0},{x:0.5,y:0.5}],[{x:0,y:0},{x:1,y:0},{x:0.5,y:0.5}],[{x:1,y:0},{x:1,y:1},{x:0.5,y:0.5}],[{x:1,y:1},{x:0,y:1},{x:0.5,y:0.5}],[{x:0,y:1},{x:0,y:0},{x:0.5,y:0.5}],[{x:0,y:0},{x:1,y:0},{x:0.5,y:0.5}],[{x:0,y:1},{x:0,y:0},{x:0.5,y:0.5}],[{x:0,y:0},{x:1,y:0},{x:0.5,y:0.5}],[{x:1,y:0},{x:1,y:1},{x:0.5,y:0.5}],[{x:1,y:1},{x:0,y:1},{x:0.5,y:0.5}]]}

//Code to generate data, from cube case of material index calculation of mergedDual
/*						let normal = face.normal;
						let a = geometry.vertices[face.a];
						let b = geometry.vertices[face.b];
						let c = geometry.vertices[face.c];

						if(normal.x == 1){
							face.materialIndex = 0;
							geometry.faceVertexUvs[0][i] = [
								new THREE.Vector2(0.5*(1-Math.round(a.z)), 0.5*(Math.round(a.y)+1)),
								new THREE.Vector2(0.5*(1-Math.round(b.z)), 0.5*(Math.round(b.y)+1)),
								new THREE.Vector2(0.5*(1-Math.round(c.z)), 0.5*(Math.round(c.y)+1))
							];
						}
						else if(normal.x == -1){
							face.materialIndex = 1;
							geometry.faceVertexUvs[0][i] = [
								new THREE.Vector2(0.5*(Math.round(a.z)+1), 0.5*(Math.round(a.y)+1)),
								new THREE.Vector2(0.5*(Math.round(b.z)+1), 0.5*(Math.round(b.y)+1)),
								new THREE.Vector2(0.5*(Math.round(c.z)+1), 0.5*(Math.round(c.y)+1))
							];
						}
						else if(normal.y == 1){
							face.materialIndex = 2;
							geometry.faceVertexUvs[0][i] = [
								new THREE.Vector2(0.5*(Math.round(a.x)+1), 0.5*(1-Math.round(a.z))),
								new THREE.Vector2(0.5*(Math.round(b.x)+1), 0.5*(1-Math.round(b.z))),
								new THREE.Vector2(0.5*(Math.round(c.x)+1), 0.5*(1-Math.round(c.z)))
							];
						}
						else if(normal.y == -1){
							face.materialIndex = 3;
							geometry.faceVertexUvs[0][i] = [
								new THREE.Vector2(0.5*(Math.round(a.x)+1), 0.5*(Math.round(a.z)+1)),
								new THREE.Vector2(0.5*(Math.round(b.x)+1), 0.5*(Math.round(b.z)+1)),
								new THREE.Vector2(0.5*(Math.round(c.x)+1), 0.5*(Math.round(c.z)+1))
							];

						}
						else if(normal.z == 1){
							face.materialIndex = 4;
							geometry.faceVertexUvs[0][i] = [
								new THREE.Vector2(0.5*(Math.round(a.x)+1), 0.5*(Math.round(a.y)+1)),
								new THREE.Vector2(0.5*(Math.round(b.x)+1), 0.5*(Math.round(b.y)+1)),
								new THREE.Vector2(0.5*(Math.round(c.x)+1), 0.5*(Math.round(c.y)+1))
							];
						}
						else if(normal.z == -1){
							face.materialIndex = 5;
							geometry.faceVertexUvs[0][i] = [
								new THREE.Vector2(0.5*(1-Math.round(a.x)), 0.5*(Math.round(a.y)+1)),
								new THREE.Vector2(0.5*(1-Math.round(b.x)), 0.5*(Math.round(b.y)+1)),
								new THREE.Vector2(0.5*(1-Math.round(c.x)), 0.5*(Math.round(c.y)+1))
							];

						}
						else{
							face.materialIndex = 6;
						};*/
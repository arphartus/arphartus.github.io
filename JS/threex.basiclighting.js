var THREEx = THREEx || {}

/**
 * build a classic 3 points lighting
 * @return {THREE.Object3D} container for the 3 lights
 */
THREEx.ThreePointsLighting	= function(){
	var container	= new THREE.Object3D()

	var object3d	= new THREE.AmbientLight(0x101010)
	object3d.name	= 'Ambient light'
	container.add(object3d)

	var object3d	= new THREE.PointLight('white', 75, 20, 2)
	object3d.position.set(0,7.5,-10)
	object3d.name	= 'Back light'
	container.add(object3d)

	var object3d	= new THREE.PointLight('white', 150, 20, 2)
	object3d.position.set(-8.5, 2.5, 10)
	object3d.name 	= 'fill light'
	container.add(object3d)

	var object3d	= new THREE.PointLight('white', 300, 20, 2)
	object3d.position.set(8.5, 8.5, 10)
	object3d.name	= 'key light'
	container.add(object3d)
	
	return container
}

/**
 * build a sunset lighting
 * @return {THREE.Object3D} container for the 3 lights
 */
THREEx.SunSetLighting	= function(){
	var object3d	= new THREE.Object3D()
	var light	= new THREE.AmbientLight( 0x080808 )
	object3d.add( light )
	var light	= new THREE.DirectionalLight( 'midnightblue', 1 )
	light.position.set(5,1,0)
	object3d.add( light )
	var light	= new THREE.DirectionalLight( 'darkred', 1.5 )
	object3d.add( light )
	return object3d
}
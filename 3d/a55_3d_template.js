import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

window.o3 = THREE;
window.o3loadr = GLTFLoader;
window.o3orbit = OrbitControls;
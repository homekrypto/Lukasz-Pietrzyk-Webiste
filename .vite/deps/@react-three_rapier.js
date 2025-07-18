import {
  AI,
  GI,
  KI,
  Rg,
  XA,
  cg,
  iI,
  jA,
  qg
} from "./chunk-XODHDMH7.js";
import {
  mergeVertices
} from "./chunk-KKG6QEIW.js";
import {
  suspend,
  useFrame,
  useThree
} from "./chunk-PR5G44QQ.js";
import {
  BufferAttribute,
  BufferGeometry,
  DynamicDrawUsage,
  Euler,
  MathUtils,
  Matrix4,
  Object3D,
  Quaternion,
  Vector3
} from "./chunk-C77YVHLU.js";
import "./chunk-J3GJSMK3.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@react-three/rapier/dist/react-three-rapier.esm.js
var import_react = __toESM(require_react());
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var _quaternion = new Quaternion();
new Euler();
var _vector3 = new Vector3();
new Object3D();
var _matrix4 = new Matrix4();
var _position = new Vector3();
var _rotation = new Quaternion();
var _scale = new Vector3();
var vectorArrayToVector3 = (arr) => {
  const [x, y, z] = arr;
  return new Vector3(x, y, z);
};
var rapierQuaternionToQuaternion = ({
  x,
  y,
  z,
  w
}) => _quaternion.set(x, y, z, w);
var vector3ToRapierVector = (v) => {
  if (Array.isArray(v)) {
    return new jA(v[0], v[1], v[2]);
  } else if (typeof v === "number") {
    return new jA(v, v, v);
  } else {
    const threeVector3 = v;
    return new jA(threeVector3.x, threeVector3.y, threeVector3.z);
  }
};
var quaternionToRapierQuaternion = (v) => {
  if (Array.isArray(v)) {
    return new XA(v[0], v[1], v[2], v[3]);
  } else {
    return new XA(v.x, v.y, v.z, v.w);
  }
};
var rigidBodyTypeMap = {
  fixed: 1,
  dynamic: 0,
  kinematicPosition: 2,
  kinematicVelocity: 3
};
var rigidBodyTypeFromString = (type) => rigidBodyTypeMap[type];
var scaleVertices = (vertices, scale) => {
  const scaledVerts = Array.from(vertices);
  for (let i = 0; i < vertices.length / 3; i++) {
    scaledVerts[i * 3] *= scale.x;
    scaledVerts[i * 3 + 1] *= scale.y;
    scaledVerts[i * 3 + 2] *= scale.z;
  }
  return scaledVerts;
};
var vectorToTuple = (v) => {
  if (!v) return [0];
  if (v instanceof Quaternion) {
    return [v.x, v.y, v.z, v.w];
  }
  if (v instanceof Vector3 || v instanceof Euler) {
    return [v.x, v.y, v.z];
  }
  if (Array.isArray(v)) {
    return v;
  }
  return [v];
};
function useConst(initialValue) {
  const ref = (0, import_react.useRef)(void 0);
  if (ref.current === void 0) {
    ref.current = {
      value: typeof initialValue === "function" ? initialValue() : initialValue
    };
  }
  return ref.current.value;
}
var useRaf = (callback) => {
  const cb = (0, import_react.useRef)(callback);
  const raf = (0, import_react.useRef)(0);
  const lastFrame = (0, import_react.useRef)(0);
  (0, import_react.useEffect)(() => {
    cb.current = callback;
  }, [callback]);
  (0, import_react.useEffect)(() => {
    const loop = () => {
      const now = performance.now();
      const delta = now - lastFrame.current;
      raf.current = requestAnimationFrame(loop);
      cb.current(delta / 1e3);
      lastFrame.current = now;
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, []);
};
var UseFrameStepper = ({
  onStep,
  updatePriority
}) => {
  useFrame((_, dt) => {
    onStep(dt);
  }, updatePriority);
  return null;
};
var RafStepper = ({
  onStep
}) => {
  useRaf((dt) => {
    onStep(dt);
  });
  return null;
};
var FrameStepper = ({
  onStep,
  type,
  updatePriority
}) => {
  return type === "independent" ? import_react.default.createElement(RafStepper, {
    onStep
  }) : import_react.default.createElement(UseFrameStepper, {
    onStep,
    updatePriority
  });
};
var FrameStepper$1 = (0, import_react.memo)(FrameStepper);
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
var _excluded$2 = ["mass", "linearDamping", "angularDamping", "type", "onCollisionEnter", "onCollisionExit", "onIntersectionEnter", "onIntersectionExit", "onContactForce", "children", "canSleep", "ccd", "gravityScale", "softCcdPrediction", "ref"];
var scaleColliderArgs = (shape, args, scale) => {
  const newArgs = args.slice();
  if (shape === "heightfield") {
    const s = newArgs[3];
    s.x *= scale.x;
    s.x *= scale.y;
    s.x *= scale.z;
    return newArgs;
  }
  if (shape === "trimesh" || shape === "convexHull") {
    newArgs[0] = scaleVertices(newArgs[0], scale);
    return newArgs;
  }
  const scaleArray = [scale.x, scale.y, scale.z, scale.x, scale.x];
  return newArgs.map((arg, index) => scaleArray[index] * arg);
};
var createColliderFromOptions = (options, world, scale, getRigidBody) => {
  const scaledArgs = scaleColliderArgs(options.shape, options.args, scale);
  const desc = cg[options.shape](...scaledArgs);
  return world.createCollider(desc, getRigidBody === null || getRigidBody === void 0 ? void 0 : getRigidBody());
};
var immutableColliderOptions = ["shape", "args"];
var massPropertiesConflictError = "Please pick ONLY ONE of the `density`, `mass` and `massProperties` options.";
var setColliderMassOptions = (collider, options) => {
  if (options.density !== void 0) {
    if (options.mass !== void 0 || options.massProperties !== void 0) {
      throw new Error(massPropertiesConflictError);
    }
    collider.setDensity(options.density);
    return;
  }
  if (options.mass !== void 0) {
    if (options.massProperties !== void 0) {
      throw new Error(massPropertiesConflictError);
    }
    collider.setMass(options.mass);
    return;
  }
  if (options.massProperties !== void 0) {
    collider.setMassProperties(options.massProperties.mass, options.massProperties.centerOfMass, options.massProperties.principalAngularInertia, options.massProperties.angularInertiaLocalFrame);
  }
};
var mutableColliderOptions = {
  sensor: (collider, value) => {
    collider.setSensor(value);
  },
  collisionGroups: (collider, value) => {
    collider.setCollisionGroups(value);
  },
  solverGroups: (collider, value) => {
    collider.setSolverGroups(value);
  },
  friction: (collider, value) => {
    collider.setFriction(value);
  },
  frictionCombineRule: (collider, value) => {
    collider.setFrictionCombineRule(value);
  },
  restitution: (collider, value) => {
    collider.setRestitution(value);
  },
  restitutionCombineRule: (collider, value) => {
    collider.setRestitutionCombineRule(value);
  },
  activeCollisionTypes: (collider, value) => {
    collider.setActiveCollisionTypes(value);
  },
  contactSkin: (collider, value) => {
    collider.setContactSkin(value);
  },
  // To make sure the options all mutable options are listed
  quaternion: () => {
  },
  position: () => {
  },
  rotation: () => {
  },
  scale: () => {
  }
};
var mutableColliderOptionKeys = Object.keys(mutableColliderOptions);
var setColliderOptions = (collider, options, states) => {
  const state = states.get(collider.handle);
  if (state) {
    var _state$worldParent;
    const parentWorldScale = state.object.parent.getWorldScale(_vector3);
    const parentInvertedWorldMatrix = (_state$worldParent = state.worldParent) === null || _state$worldParent === void 0 ? void 0 : _state$worldParent.matrixWorld.clone().invert();
    state.object.updateWorldMatrix(true, false);
    _matrix4.copy(state.object.matrixWorld);
    if (parentInvertedWorldMatrix) {
      _matrix4.premultiply(parentInvertedWorldMatrix);
    }
    _matrix4.decompose(_position, _rotation, _scale);
    if (collider.parent()) {
      collider.setTranslationWrtParent({
        x: _position.x * parentWorldScale.x,
        y: _position.y * parentWorldScale.y,
        z: _position.z * parentWorldScale.z
      });
      collider.setRotationWrtParent(_rotation);
    } else {
      collider.setTranslation({
        x: _position.x * parentWorldScale.x,
        y: _position.y * parentWorldScale.y,
        z: _position.z * parentWorldScale.z
      });
      collider.setRotation(_rotation);
    }
    mutableColliderOptionKeys.forEach((key) => {
      if (key in options) {
        const option = options[key];
        mutableColliderOptions[key](
          collider,
          // @ts-ignore Option does not want to fit into the function, but it will
          option,
          options
        );
      }
    });
    setColliderMassOptions(collider, options);
  }
};
var useUpdateColliderOptions = (getCollider, props, states) => {
  const mutablePropsAsFlatArray = (0, import_react.useMemo)(() => mutableColliderOptionKeys.flatMap((key) => {
    return vectorToTuple(props[key]);
  }), [props]);
  (0, import_react.useEffect)(() => {
    const collider = getCollider();
    setColliderOptions(collider, props, states);
  }, [...mutablePropsAsFlatArray, getCollider]);
};
var isChildOfMeshCollider = (child) => {
  let flag = false;
  child.traverseAncestors((a) => {
    if (a.userData.r3RapierType === "MeshCollider") flag = true;
  });
  return flag;
};
var createColliderState = (collider, object, rigidBodyObject) => {
  return {
    collider,
    worldParent: rigidBodyObject || void 0,
    object
  };
};
var autoColliderMap = {
  cuboid: "cuboid",
  ball: "ball",
  hull: "convexHull",
  trimesh: "trimesh"
};
var createColliderPropsFromChildren = ({
  object,
  ignoreMeshColliders: _ignoreMeshColliders = true,
  options
}) => {
  const childColliderProps = [];
  object.updateWorldMatrix(true, false);
  const invertedParentMatrixWorld = object.matrixWorld.clone().invert();
  const colliderFromChild = (child) => {
    if ("isMesh" in child) {
      if (_ignoreMeshColliders && isChildOfMeshCollider(child)) return;
      const worldScale = child.getWorldScale(_scale);
      const shape = autoColliderMap[options.colliders || "cuboid"];
      child.updateWorldMatrix(true, false);
      _matrix4.copy(child.matrixWorld).premultiply(invertedParentMatrixWorld).decompose(_position, _rotation, _scale);
      const rotationEuler = new Euler().setFromQuaternion(_rotation, "XYZ");
      const {
        geometry
      } = child;
      const {
        args,
        offset
      } = getColliderArgsFromGeometry(geometry, options.colliders || "cuboid");
      const colliderProps = _objectSpread2(_objectSpread2({}, cleanRigidBodyPropsForCollider(options)), {}, {
        args,
        shape,
        rotation: [rotationEuler.x, rotationEuler.y, rotationEuler.z],
        position: [_position.x + offset.x * worldScale.x, _position.y + offset.y * worldScale.y, _position.z + offset.z * worldScale.z],
        scale: [worldScale.x, worldScale.y, worldScale.z]
      });
      childColliderProps.push(colliderProps);
    }
  };
  if (options.includeInvisible) {
    object.traverse(colliderFromChild);
  } else {
    object.traverseVisible(colliderFromChild);
  }
  return childColliderProps;
};
var getColliderArgsFromGeometry = (geometry, colliders) => {
  switch (colliders) {
    case "cuboid": {
      geometry.computeBoundingBox();
      const {
        boundingBox
      } = geometry;
      const size = boundingBox.getSize(new Vector3());
      return {
        args: [size.x / 2, size.y / 2, size.z / 2],
        offset: boundingBox.getCenter(new Vector3())
      };
    }
    case "ball": {
      geometry.computeBoundingSphere();
      const {
        boundingSphere
      } = geometry;
      const radius = boundingSphere.radius;
      return {
        args: [radius],
        offset: boundingSphere.center
      };
    }
    case "trimesh": {
      var _clonedGeometry$index;
      const clonedGeometry = geometry.index ? geometry.clone() : mergeVertices(geometry);
      return {
        args: [clonedGeometry.attributes.position.array, (_clonedGeometry$index = clonedGeometry.index) === null || _clonedGeometry$index === void 0 ? void 0 : _clonedGeometry$index.array],
        offset: new Vector3()
      };
    }
    case "hull": {
      const g = geometry.clone();
      return {
        args: [g.attributes.position.array],
        offset: new Vector3()
      };
    }
  }
  return {
    args: [],
    offset: new Vector3()
  };
};
var getActiveCollisionEventsFromProps = (props) => {
  return {
    collision: !!(props !== null && props !== void 0 && props.onCollisionEnter || props !== null && props !== void 0 && props.onCollisionExit || props !== null && props !== void 0 && props.onIntersectionEnter || props !== null && props !== void 0 && props.onIntersectionExit),
    contactForce: !!(props !== null && props !== void 0 && props.onContactForce)
  };
};
var useColliderEvents = (getCollider, props, events, activeEvents = {}) => {
  const {
    onCollisionEnter,
    onCollisionExit,
    onIntersectionEnter,
    onIntersectionExit,
    onContactForce
  } = props;
  (0, import_react.useEffect)(() => {
    const collider = getCollider();
    if (collider) {
      const {
        collision: collisionEventsActive,
        contactForce: contactForceEventsActive
      } = getActiveCollisionEventsFromProps(props);
      const hasCollisionEvent = collisionEventsActive || activeEvents.collision;
      const hasContactForceEvent = contactForceEventsActive || activeEvents.contactForce;
      if (hasCollisionEvent && hasContactForceEvent) {
        collider.setActiveEvents(iI.COLLISION_EVENTS | iI.CONTACT_FORCE_EVENTS);
      } else if (hasCollisionEvent) {
        collider.setActiveEvents(iI.COLLISION_EVENTS);
      } else if (hasContactForceEvent) {
        collider.setActiveEvents(iI.CONTACT_FORCE_EVENTS);
      }
      events.set(collider.handle, {
        onCollisionEnter,
        onCollisionExit,
        onIntersectionEnter,
        onIntersectionExit,
        onContactForce
      });
    }
    return () => {
      if (collider) {
        events.delete(collider.handle);
      }
    };
  }, [onCollisionEnter, onCollisionExit, onIntersectionEnter, onIntersectionExit, onContactForce, activeEvents]);
};
var cleanRigidBodyPropsForCollider = (props = {}) => {
  const rest = _objectWithoutProperties(props, _excluded$2);
  return rest;
};
var useMutableCallback = (fn) => {
  const ref = (0, import_react.useRef)(fn);
  (0, import_react.useEffect)(() => {
    ref.current = fn;
  }, [fn]);
  return ref;
};
var useRapier = () => {
  const rapier = (0, import_react.useContext)(rapierContext);
  if (!rapier) throw new Error("react-three-rapier: useRapier must be used within <Physics />!");
  return rapier;
};
var useBeforePhysicsStep = (callback) => {
  const {
    beforeStepCallbacks
  } = useRapier();
  const ref = useMutableCallback(callback);
  (0, import_react.useEffect)(() => {
    beforeStepCallbacks.add(ref);
    return () => {
      beforeStepCallbacks.delete(ref);
    };
  }, []);
};
var useAfterPhysicsStep = (callback) => {
  const {
    afterStepCallbacks
  } = useRapier();
  const ref = useMutableCallback(callback);
  (0, import_react.useEffect)(() => {
    afterStepCallbacks.add(ref);
    return () => {
      afterStepCallbacks.delete(ref);
    };
  }, []);
};
var useChildColliderProps = (ref, options, ignoreMeshColliders = true) => {
  const [colliderProps, setColliderProps] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    const object = ref.current;
    if (object && options.colliders !== false) {
      setColliderProps(createColliderPropsFromChildren({
        object: ref.current,
        options,
        ignoreMeshColliders
      }));
    }
  }, [options.colliders]);
  return colliderProps;
};
var Debug = (0, import_react.memo)(() => {
  const {
    world
  } = useRapier();
  const ref = (0, import_react.useRef)(null);
  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const buffers = world.debugRender();
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(buffers.vertices, 3));
    geometry.setAttribute("color", new BufferAttribute(buffers.colors, 4));
    mesh.geometry.dispose();
    mesh.geometry = geometry;
  });
  return import_react.default.createElement("group", null, import_react.default.createElement("lineSegments", {
    ref,
    frustumCulled: false
  }, import_react.default.createElement("lineBasicMaterial", {
    color: 16777215,
    vertexColors: true
  }), import_react.default.createElement("bufferGeometry", null)));
});
var createSingletonProxy = (createInstance) => {
  let instance;
  const handler = {
    get(target, prop) {
      if (!instance) {
        instance = createInstance();
      }
      return Reflect.get(instance, prop);
    },
    set(target, prop, value) {
      if (!instance) {
        instance = createInstance();
      }
      return Reflect.set(instance, prop, value);
    }
  };
  const proxy = new Proxy({}, handler);
  const reset = () => {
    instance = void 0;
  };
  const set = (newInstance) => {
    instance = newInstance;
  };
  return {
    proxy,
    reset,
    set
  };
};
var rapierContext = (0, import_react.createContext)(void 0);
var getCollisionPayloadFromSource = (target, other) => {
  var _target$collider$stat, _target$rigidBody$sta, _other$collider$state, _other$rigidBody$stat, _other$collider$state2, _other$rigidBody$stat2;
  return {
    target: {
      rigidBody: target.rigidBody.object,
      collider: target.collider.object,
      colliderObject: (_target$collider$stat = target.collider.state) === null || _target$collider$stat === void 0 ? void 0 : _target$collider$stat.object,
      rigidBodyObject: (_target$rigidBody$sta = target.rigidBody.state) === null || _target$rigidBody$sta === void 0 ? void 0 : _target$rigidBody$sta.object
    },
    other: {
      rigidBody: other.rigidBody.object,
      collider: other.collider.object,
      colliderObject: (_other$collider$state = other.collider.state) === null || _other$collider$state === void 0 ? void 0 : _other$collider$state.object,
      rigidBodyObject: (_other$rigidBody$stat = other.rigidBody.state) === null || _other$rigidBody$stat === void 0 ? void 0 : _other$rigidBody$stat.object
    },
    rigidBody: other.rigidBody.object,
    collider: other.collider.object,
    colliderObject: (_other$collider$state2 = other.collider.state) === null || _other$collider$state2 === void 0 ? void 0 : _other$collider$state2.object,
    rigidBodyObject: (_other$rigidBody$stat2 = other.rigidBody.state) === null || _other$rigidBody$stat2 === void 0 ? void 0 : _other$rigidBody$stat2.object
  };
};
var importRapier = async () => {
  let r = await import("./rapier.es-DNRMF5DS.js");
  await r.init();
  return r;
};
var Physics = (props) => {
  const {
    colliders = "cuboid",
    children,
    timeStep = 1 / 60,
    paused = false,
    interpolate = true,
    updatePriority,
    updateLoop = "follow",
    debug = false,
    gravity = [0, -9.81, 0],
    allowedLinearError = 1e-3,
    predictionDistance = 2e-3,
    numSolverIterations = 4,
    numAdditionalFrictionIterations = 4,
    numInternalPgsIterations = 1,
    minIslandSize = 128,
    maxCcdSubsteps = 1,
    contactNaturalFrequency = 30,
    lengthUnit = 1
  } = props;
  const rapier = suspend(importRapier, ["@react-thee/rapier", importRapier]);
  const {
    invalidate
  } = useThree();
  const rigidBodyStates = useConst(() => /* @__PURE__ */ new Map());
  const colliderStates = useConst(() => /* @__PURE__ */ new Map());
  const rigidBodyEvents = useConst(() => /* @__PURE__ */ new Map());
  const colliderEvents = useConst(() => /* @__PURE__ */ new Map());
  const eventQueue = useConst(() => new Rg(false));
  const beforeStepCallbacks = useConst(() => /* @__PURE__ */ new Set());
  const afterStepCallbacks = useConst(() => /* @__PURE__ */ new Set());
  const {
    proxy: worldProxy,
    reset: resetWorldProxy,
    set: setWorldProxy
  } = useConst(() => createSingletonProxy(() => new rapier.World(vectorArrayToVector3(gravity))));
  (0, import_react.useEffect)(() => {
    return () => {
      worldProxy.free();
      resetWorldProxy();
    };
  }, []);
  (0, import_react.useEffect)(() => {
    worldProxy.gravity = vector3ToRapierVector(gravity);
    worldProxy.integrationParameters.numSolverIterations = numSolverIterations;
    worldProxy.integrationParameters.numAdditionalFrictionIterations = numAdditionalFrictionIterations;
    worldProxy.integrationParameters.numInternalPgsIterations = numInternalPgsIterations;
    worldProxy.integrationParameters.normalizedAllowedLinearError = allowedLinearError;
    worldProxy.integrationParameters.minIslandSize = minIslandSize;
    worldProxy.integrationParameters.maxCcdSubsteps = maxCcdSubsteps;
    worldProxy.integrationParameters.normalizedPredictionDistance = predictionDistance;
    worldProxy.lengthUnit = lengthUnit;
    worldProxy.integrationParameters.contact_natural_frequency = contactNaturalFrequency;
  }, [worldProxy, ...gravity, numSolverIterations, numAdditionalFrictionIterations, numInternalPgsIterations, allowedLinearError, minIslandSize, maxCcdSubsteps, predictionDistance, lengthUnit, contactNaturalFrequency]);
  const getSourceFromColliderHandle = (0, import_react.useCallback)((handle) => {
    var _collider$parent;
    const collider = worldProxy.getCollider(handle);
    const colEvents = colliderEvents.get(handle);
    const colliderState = colliderStates.get(handle);
    const rigidBodyHandle = collider === null || collider === void 0 ? void 0 : (_collider$parent = collider.parent()) === null || _collider$parent === void 0 ? void 0 : _collider$parent.handle;
    const rigidBody = rigidBodyHandle !== void 0 ? worldProxy.getRigidBody(rigidBodyHandle) : void 0;
    const rbEvents = rigidBody && rigidBodyHandle !== void 0 ? rigidBodyEvents.get(rigidBodyHandle) : void 0;
    const rigidBodyState = rigidBodyHandle !== void 0 ? rigidBodyStates.get(rigidBodyHandle) : void 0;
    const source = {
      collider: {
        object: collider,
        events: colEvents,
        state: colliderState
      },
      rigidBody: {
        object: rigidBody,
        events: rbEvents,
        state: rigidBodyState
      }
    };
    return source;
  }, []);
  const [steppingState] = (0, import_react.useState)({
    previousState: {},
    accumulator: 0
  });
  const step = (0, import_react.useCallback)((dt) => {
    const world = worldProxy;
    const timeStepVariable = timeStep === "vary";
    const clampedDelta = MathUtils.clamp(dt, 0, 0.5);
    const stepWorld = (delta) => {
      beforeStepCallbacks.forEach((callback) => {
        callback.current(world);
      });
      world.timestep = delta;
      world.step(eventQueue);
      afterStepCallbacks.forEach((callback) => {
        callback.current(world);
      });
    };
    if (timeStepVariable) {
      stepWorld(clampedDelta);
    } else {
      steppingState.accumulator += clampedDelta;
      while (steppingState.accumulator >= timeStep) {
        if (interpolate) {
          steppingState.previousState = {};
          world.forEachRigidBody((body) => {
            steppingState.previousState[body.handle] = {
              position: body.translation(),
              rotation: body.rotation()
            };
          });
        }
        stepWorld(timeStep);
        steppingState.accumulator -= timeStep;
      }
    }
    const interpolationAlpha = timeStepVariable || !interpolate || paused ? 1 : steppingState.accumulator / timeStep;
    rigidBodyStates.forEach((state, handle) => {
      const rigidBody = world.getRigidBody(handle);
      const events = rigidBodyEvents.get(handle);
      if (events !== null && events !== void 0 && events.onSleep || events !== null && events !== void 0 && events.onWake) {
        if (rigidBody.isSleeping() && !state.isSleeping) {
          var _events$onSleep;
          events === null || events === void 0 ? void 0 : (_events$onSleep = events.onSleep) === null || _events$onSleep === void 0 ? void 0 : _events$onSleep.call(events);
        }
        if (!rigidBody.isSleeping() && state.isSleeping) {
          var _events$onWake;
          events === null || events === void 0 ? void 0 : (_events$onWake = events.onWake) === null || _events$onWake === void 0 ? void 0 : _events$onWake.call(events);
        }
        state.isSleeping = rigidBody.isSleeping();
      }
      if (!rigidBody || rigidBody.isSleeping() && !("isInstancedMesh" in state.object) || !state.setMatrix) {
        return;
      }
      let t = rigidBody.translation();
      let r = rigidBody.rotation();
      let previousState = steppingState.previousState[handle];
      if (previousState) {
        _matrix4.compose(previousState.position, rapierQuaternionToQuaternion(previousState.rotation), state.scale).premultiply(state.invertedWorldMatrix).decompose(_position, _rotation, _scale);
        if (state.meshType == "mesh") {
          state.object.position.copy(_position);
          state.object.quaternion.copy(_rotation);
        }
      }
      _matrix4.compose(t, rapierQuaternionToQuaternion(r), state.scale).premultiply(state.invertedWorldMatrix).decompose(_position, _rotation, _scale);
      if (state.meshType == "instancedMesh") {
        state.setMatrix(_matrix4);
      } else {
        state.object.position.lerp(_position, interpolationAlpha);
        state.object.quaternion.slerp(_rotation, interpolationAlpha);
      }
    });
    eventQueue.drainCollisionEvents((handle1, handle2, started) => {
      const source1 = getSourceFromColliderHandle(handle1);
      const source2 = getSourceFromColliderHandle(handle2);
      if (!(source1 !== null && source1 !== void 0 && source1.collider.object) || !(source2 !== null && source2 !== void 0 && source2.collider.object)) {
        return;
      }
      const collisionPayload1 = getCollisionPayloadFromSource(source1, source2);
      const collisionPayload2 = getCollisionPayloadFromSource(source2, source1);
      if (started) {
        world.contactPair(source1.collider.object, source2.collider.object, (manifold, flipped) => {
          var _source1$rigidBody$ev, _source1$rigidBody$ev2, _source2$rigidBody$ev, _source2$rigidBody$ev2, _source1$collider$eve, _source1$collider$eve2, _source2$collider$eve, _source2$collider$eve2;
          (_source1$rigidBody$ev = source1.rigidBody.events) === null || _source1$rigidBody$ev === void 0 ? void 0 : (_source1$rigidBody$ev2 = _source1$rigidBody$ev.onCollisionEnter) === null || _source1$rigidBody$ev2 === void 0 ? void 0 : _source1$rigidBody$ev2.call(_source1$rigidBody$ev, _objectSpread2(_objectSpread2({}, collisionPayload1), {}, {
            manifold,
            flipped
          }));
          (_source2$rigidBody$ev = source2.rigidBody.events) === null || _source2$rigidBody$ev === void 0 ? void 0 : (_source2$rigidBody$ev2 = _source2$rigidBody$ev.onCollisionEnter) === null || _source2$rigidBody$ev2 === void 0 ? void 0 : _source2$rigidBody$ev2.call(_source2$rigidBody$ev, _objectSpread2(_objectSpread2({}, collisionPayload2), {}, {
            manifold,
            flipped
          }));
          (_source1$collider$eve = source1.collider.events) === null || _source1$collider$eve === void 0 ? void 0 : (_source1$collider$eve2 = _source1$collider$eve.onCollisionEnter) === null || _source1$collider$eve2 === void 0 ? void 0 : _source1$collider$eve2.call(_source1$collider$eve, _objectSpread2(_objectSpread2({}, collisionPayload1), {}, {
            manifold,
            flipped
          }));
          (_source2$collider$eve = source2.collider.events) === null || _source2$collider$eve === void 0 ? void 0 : (_source2$collider$eve2 = _source2$collider$eve.onCollisionEnter) === null || _source2$collider$eve2 === void 0 ? void 0 : _source2$collider$eve2.call(_source2$collider$eve, _objectSpread2(_objectSpread2({}, collisionPayload2), {}, {
            manifold,
            flipped
          }));
        });
      } else {
        var _source1$rigidBody$ev3, _source1$rigidBody$ev4, _source2$rigidBody$ev3, _source2$rigidBody$ev4, _source1$collider$eve3, _source1$collider$eve4, _source2$collider$eve3, _source2$collider$eve4;
        (_source1$rigidBody$ev3 = source1.rigidBody.events) === null || _source1$rigidBody$ev3 === void 0 ? void 0 : (_source1$rigidBody$ev4 = _source1$rigidBody$ev3.onCollisionExit) === null || _source1$rigidBody$ev4 === void 0 ? void 0 : _source1$rigidBody$ev4.call(_source1$rigidBody$ev3, collisionPayload1);
        (_source2$rigidBody$ev3 = source2.rigidBody.events) === null || _source2$rigidBody$ev3 === void 0 ? void 0 : (_source2$rigidBody$ev4 = _source2$rigidBody$ev3.onCollisionExit) === null || _source2$rigidBody$ev4 === void 0 ? void 0 : _source2$rigidBody$ev4.call(_source2$rigidBody$ev3, collisionPayload2);
        (_source1$collider$eve3 = source1.collider.events) === null || _source1$collider$eve3 === void 0 ? void 0 : (_source1$collider$eve4 = _source1$collider$eve3.onCollisionExit) === null || _source1$collider$eve4 === void 0 ? void 0 : _source1$collider$eve4.call(_source1$collider$eve3, collisionPayload1);
        (_source2$collider$eve3 = source2.collider.events) === null || _source2$collider$eve3 === void 0 ? void 0 : (_source2$collider$eve4 = _source2$collider$eve3.onCollisionExit) === null || _source2$collider$eve4 === void 0 ? void 0 : _source2$collider$eve4.call(_source2$collider$eve3, collisionPayload2);
      }
      if (started) {
        if (world.intersectionPair(source1.collider.object, source2.collider.object)) {
          var _source1$rigidBody$ev5, _source1$rigidBody$ev6, _source2$rigidBody$ev5, _source2$rigidBody$ev6, _source1$collider$eve5, _source1$collider$eve6, _source2$collider$eve5, _source2$collider$eve6;
          (_source1$rigidBody$ev5 = source1.rigidBody.events) === null || _source1$rigidBody$ev5 === void 0 ? void 0 : (_source1$rigidBody$ev6 = _source1$rigidBody$ev5.onIntersectionEnter) === null || _source1$rigidBody$ev6 === void 0 ? void 0 : _source1$rigidBody$ev6.call(_source1$rigidBody$ev5, collisionPayload1);
          (_source2$rigidBody$ev5 = source2.rigidBody.events) === null || _source2$rigidBody$ev5 === void 0 ? void 0 : (_source2$rigidBody$ev6 = _source2$rigidBody$ev5.onIntersectionEnter) === null || _source2$rigidBody$ev6 === void 0 ? void 0 : _source2$rigidBody$ev6.call(_source2$rigidBody$ev5, collisionPayload2);
          (_source1$collider$eve5 = source1.collider.events) === null || _source1$collider$eve5 === void 0 ? void 0 : (_source1$collider$eve6 = _source1$collider$eve5.onIntersectionEnter) === null || _source1$collider$eve6 === void 0 ? void 0 : _source1$collider$eve6.call(_source1$collider$eve5, collisionPayload1);
          (_source2$collider$eve5 = source2.collider.events) === null || _source2$collider$eve5 === void 0 ? void 0 : (_source2$collider$eve6 = _source2$collider$eve5.onIntersectionEnter) === null || _source2$collider$eve6 === void 0 ? void 0 : _source2$collider$eve6.call(_source2$collider$eve5, collisionPayload2);
        }
      } else {
        var _source1$rigidBody$ev7, _source1$rigidBody$ev8, _source2$rigidBody$ev7, _source2$rigidBody$ev8, _source1$collider$eve7, _source1$collider$eve8, _source2$collider$eve7, _source2$collider$eve8;
        (_source1$rigidBody$ev7 = source1.rigidBody.events) === null || _source1$rigidBody$ev7 === void 0 ? void 0 : (_source1$rigidBody$ev8 = _source1$rigidBody$ev7.onIntersectionExit) === null || _source1$rigidBody$ev8 === void 0 ? void 0 : _source1$rigidBody$ev8.call(_source1$rigidBody$ev7, collisionPayload1);
        (_source2$rigidBody$ev7 = source2.rigidBody.events) === null || _source2$rigidBody$ev7 === void 0 ? void 0 : (_source2$rigidBody$ev8 = _source2$rigidBody$ev7.onIntersectionExit) === null || _source2$rigidBody$ev8 === void 0 ? void 0 : _source2$rigidBody$ev8.call(_source2$rigidBody$ev7, collisionPayload2);
        (_source1$collider$eve7 = source1.collider.events) === null || _source1$collider$eve7 === void 0 ? void 0 : (_source1$collider$eve8 = _source1$collider$eve7.onIntersectionExit) === null || _source1$collider$eve8 === void 0 ? void 0 : _source1$collider$eve8.call(_source1$collider$eve7, collisionPayload1);
        (_source2$collider$eve7 = source2.collider.events) === null || _source2$collider$eve7 === void 0 ? void 0 : (_source2$collider$eve8 = _source2$collider$eve7.onIntersectionExit) === null || _source2$collider$eve8 === void 0 ? void 0 : _source2$collider$eve8.call(_source2$collider$eve7, collisionPayload2);
      }
    });
    eventQueue.drainContactForceEvents((event) => {
      var _source1$rigidBody$ev9, _source1$rigidBody$ev10, _source2$rigidBody$ev9, _source2$rigidBody$ev10, _source1$collider$eve9, _source1$collider$eve10, _source2$collider$eve9, _source2$collider$eve10;
      const source1 = getSourceFromColliderHandle(event.collider1());
      const source2 = getSourceFromColliderHandle(event.collider2());
      if (!(source1 !== null && source1 !== void 0 && source1.collider.object) || !(source2 !== null && source2 !== void 0 && source2.collider.object)) {
        return;
      }
      const collisionPayload1 = getCollisionPayloadFromSource(source1, source2);
      const collisionPayload2 = getCollisionPayloadFromSource(source2, source1);
      (_source1$rigidBody$ev9 = source1.rigidBody.events) === null || _source1$rigidBody$ev9 === void 0 ? void 0 : (_source1$rigidBody$ev10 = _source1$rigidBody$ev9.onContactForce) === null || _source1$rigidBody$ev10 === void 0 ? void 0 : _source1$rigidBody$ev10.call(_source1$rigidBody$ev9, _objectSpread2(_objectSpread2({}, collisionPayload1), {}, {
        totalForce: event.totalForce(),
        totalForceMagnitude: event.totalForceMagnitude(),
        maxForceDirection: event.maxForceDirection(),
        maxForceMagnitude: event.maxForceMagnitude()
      }));
      (_source2$rigidBody$ev9 = source2.rigidBody.events) === null || _source2$rigidBody$ev9 === void 0 ? void 0 : (_source2$rigidBody$ev10 = _source2$rigidBody$ev9.onContactForce) === null || _source2$rigidBody$ev10 === void 0 ? void 0 : _source2$rigidBody$ev10.call(_source2$rigidBody$ev9, _objectSpread2(_objectSpread2({}, collisionPayload2), {}, {
        totalForce: event.totalForce(),
        totalForceMagnitude: event.totalForceMagnitude(),
        maxForceDirection: event.maxForceDirection(),
        maxForceMagnitude: event.maxForceMagnitude()
      }));
      (_source1$collider$eve9 = source1.collider.events) === null || _source1$collider$eve9 === void 0 ? void 0 : (_source1$collider$eve10 = _source1$collider$eve9.onContactForce) === null || _source1$collider$eve10 === void 0 ? void 0 : _source1$collider$eve10.call(_source1$collider$eve9, _objectSpread2(_objectSpread2({}, collisionPayload1), {}, {
        totalForce: event.totalForce(),
        totalForceMagnitude: event.totalForceMagnitude(),
        maxForceDirection: event.maxForceDirection(),
        maxForceMagnitude: event.maxForceMagnitude()
      }));
      (_source2$collider$eve9 = source2.collider.events) === null || _source2$collider$eve9 === void 0 ? void 0 : (_source2$collider$eve10 = _source2$collider$eve9.onContactForce) === null || _source2$collider$eve10 === void 0 ? void 0 : _source2$collider$eve10.call(_source2$collider$eve9, _objectSpread2(_objectSpread2({}, collisionPayload2), {}, {
        totalForce: event.totalForce(),
        totalForceMagnitude: event.totalForceMagnitude(),
        maxForceDirection: event.maxForceDirection(),
        maxForceMagnitude: event.maxForceMagnitude()
      }));
    });
    world.forEachActiveRigidBody(() => {
      invalidate();
    });
  }, [paused, timeStep, interpolate, worldProxy]);
  const context = (0, import_react.useMemo)(() => ({
    rapier,
    world: worldProxy,
    setWorld: (world) => {
      setWorldProxy(world);
    },
    physicsOptions: {
      colliders,
      gravity
    },
    rigidBodyStates,
    colliderStates,
    rigidBodyEvents,
    colliderEvents,
    beforeStepCallbacks,
    afterStepCallbacks,
    isPaused: paused,
    isDebug: debug,
    step
  }), [paused, step, debug, colliders, gravity]);
  const stepCallback = (0, import_react.useCallback)((delta) => {
    if (!paused) {
      step(delta);
    }
  }, [paused, step]);
  return import_react.default.createElement(rapierContext.Provider, {
    value: context
  }, import_react.default.createElement(FrameStepper$1, {
    onStep: stepCallback,
    type: updateLoop,
    updatePriority
  }), debug && import_react.default.createElement(Debug, null), children);
};
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var useForwardedRef = (forwardedRef, defaultValue = null) => {
  const innerRef = (0, import_react.useRef)(defaultValue);
  if (forwardedRef && typeof forwardedRef !== "function") {
    if (!forwardedRef.current) {
      forwardedRef.current = innerRef.current;
    }
    return forwardedRef;
  }
  return innerRef;
};
var useImperativeInstance = (createFn, destroyFn, dependencyList) => {
  const ref = (0, import_react.useRef)(void 0);
  const getInstance = (0, import_react.useCallback)(() => {
    if (!ref.current) {
      ref.current = createFn();
    }
    return ref.current;
  }, dependencyList);
  (0, import_react.useEffect)(() => {
    const instance = getInstance();
    const destroy = () => destroyFn(instance);
    return () => {
      destroy();
      ref.current = void 0;
    };
  }, [getInstance]);
  return getInstance;
};
var rigidBodyDescFromOptions = (options) => {
  var _options$canSleep;
  const type = rigidBodyTypeFromString((options === null || options === void 0 ? void 0 : options.type) || "dynamic");
  const desc = new KI(type);
  desc.canSleep = (_options$canSleep = options === null || options === void 0 ? void 0 : options.canSleep) !== null && _options$canSleep !== void 0 ? _options$canSleep : true;
  return desc;
};
var createRigidBodyState = ({
  rigidBody,
  object,
  setMatrix,
  getMatrix,
  worldScale,
  meshType: _meshType = "mesh"
}) => {
  object.updateWorldMatrix(true, false);
  const invertedWorldMatrix = object.parent.matrixWorld.clone().invert();
  return {
    object,
    rigidBody,
    invertedWorldMatrix,
    setMatrix: setMatrix ? setMatrix : (matrix) => {
      object.matrix.copy(matrix);
    },
    getMatrix: getMatrix ? getMatrix : (matrix) => matrix.copy(object.matrix),
    scale: worldScale || object.getWorldScale(_scale).clone(),
    isSleeping: false,
    meshType: _meshType
  };
};
var immutableRigidBodyOptions = ["args", "colliders", "canSleep"];
var mutableRigidBodyOptions = {
  gravityScale: (rb, value) => {
    rb.setGravityScale(value, true);
  },
  additionalSolverIterations(rb, value) {
    rb.setAdditionalSolverIterations(value);
  },
  linearDamping: (rb, value) => {
    rb.setLinearDamping(value);
  },
  angularDamping: (rb, value) => {
    rb.setAngularDamping(value);
  },
  dominanceGroup: (rb, value) => {
    rb.setDominanceGroup(value);
  },
  enabledRotations: (rb, [x, y, z]) => {
    rb.setEnabledRotations(x, y, z, true);
  },
  enabledTranslations: (rb, [x, y, z]) => {
    rb.setEnabledTranslations(x, y, z, true);
  },
  lockRotations: (rb, value) => {
    rb.lockRotations(value, true);
  },
  lockTranslations: (rb, value) => {
    rb.lockTranslations(value, true);
  },
  angularVelocity: (rb, [x, y, z]) => {
    rb.setAngvel({
      x,
      y,
      z
    }, true);
  },
  linearVelocity: (rb, [x, y, z]) => {
    rb.setLinvel({
      x,
      y,
      z
    }, true);
  },
  ccd: (rb, value) => {
    rb.enableCcd(value);
  },
  softCcdPrediction: (rb, value) => {
    rb.setSoftCcdPrediction(value);
  },
  userData: (rb, value) => {
    rb.userData = value;
  },
  type(rb, value) {
    rb.setBodyType(rigidBodyTypeFromString(value), true);
  },
  position: () => {
  },
  rotation: () => {
  },
  quaternion: () => {
  },
  scale: () => {
  }
};
var mutableRigidBodyOptionKeys = Object.keys(mutableRigidBodyOptions);
var setRigidBodyOptions = (rigidBody, options, states, updateTranslations = true) => {
  if (!rigidBody) {
    return;
  }
  const state = states.get(rigidBody.handle);
  if (state) {
    if (updateTranslations) {
      state.object.updateWorldMatrix(true, false);
      _matrix4.copy(state.object.matrixWorld).decompose(_position, _rotation, _scale);
      rigidBody.setTranslation(_position, false);
      rigidBody.setRotation(_rotation, false);
    }
    mutableRigidBodyOptionKeys.forEach((key) => {
      if (key in options) {
        mutableRigidBodyOptions[key](rigidBody, options[key]);
      }
    });
  }
};
var useUpdateRigidBodyOptions = (getRigidBody, props, states, updateTranslations = true) => {
  const mutablePropsAsFlatArray = (0, import_react.useMemo)(() => mutableRigidBodyOptionKeys.flatMap((key) => {
    return vectorToTuple(props[key]);
  }), [props]);
  (0, import_react.useEffect)(() => {
    const rigidBody = getRigidBody();
    setRigidBodyOptions(rigidBody, props, states, updateTranslations);
  }, mutablePropsAsFlatArray);
};
var useRigidBodyEvents = (getRigidBody, props, events) => {
  const {
    onWake,
    onSleep,
    onCollisionEnter,
    onCollisionExit,
    onIntersectionEnter,
    onIntersectionExit,
    onContactForce
  } = props;
  const eventHandlers = {
    onWake,
    onSleep,
    onCollisionEnter,
    onCollisionExit,
    onIntersectionEnter,
    onIntersectionExit,
    onContactForce
  };
  (0, import_react.useEffect)(() => {
    const rigidBody = getRigidBody();
    events.set(rigidBody.handle, eventHandlers);
    return () => {
      events.delete(rigidBody.handle);
    };
  }, [onWake, onSleep, onCollisionEnter, onCollisionExit, onIntersectionEnter, onIntersectionExit, onContactForce]);
};
var vec3 = ({
  x,
  y,
  z
} = {
  x: 0,
  y: 0,
  z: 0
}) => {
  return new Vector3(x, y, z);
};
var quat = ({
  x,
  y,
  z,
  w
} = {
  x: 0,
  y: 0,
  z: 0,
  w: 1
}) => {
  return new Quaternion(x, y, z, w);
};
var euler = ({
  x,
  y,
  z
} = {
  x: 0,
  y: 0,
  z: 0
}) => {
  return new Euler(x, y, z);
};
var AnyCollider = (0, import_react.memo)((props) => {
  const {
    children,
    position,
    rotation,
    quaternion,
    scale,
    name
  } = props;
  const {
    world,
    colliderEvents,
    colliderStates
  } = useRapier();
  const rigidBodyContext = useRigidBodyContext();
  const colliderRef = useForwardedRef(props.ref);
  const objectRef = (0, import_react.useRef)(null);
  const immutablePropArray = immutableColliderOptions.flatMap((key) => (
    // Array.isArray(props[key]) ? [...props[key]] : props[key]
    Array.isArray(props[key]) ? props[key] : [props[key]]
  ));
  const getInstance = useImperativeInstance(() => {
    const worldScale = objectRef.current.getWorldScale(vec3());
    const collider = createColliderFromOptions(props, world, worldScale, rigidBodyContext === null || rigidBodyContext === void 0 ? void 0 : rigidBodyContext.getRigidBody);
    if (typeof props.ref == "function") {
      props.ref(collider);
    }
    colliderRef.current = collider;
    return collider;
  }, (collider) => {
    if (world.getCollider(collider.handle)) {
      world.removeCollider(collider, true);
    }
  }, [...immutablePropArray, rigidBodyContext]);
  (0, import_react.useEffect)(() => {
    const collider = getInstance();
    colliderStates.set(collider.handle, createColliderState(collider, objectRef.current, rigidBodyContext === null || rigidBodyContext === void 0 ? void 0 : rigidBodyContext.ref.current));
    return () => {
      colliderStates.delete(collider.handle);
    };
  }, [getInstance]);
  const mergedProps = (0, import_react.useMemo)(() => {
    return _objectSpread2(_objectSpread2({}, cleanRigidBodyPropsForCollider(rigidBodyContext === null || rigidBodyContext === void 0 ? void 0 : rigidBodyContext.options)), props);
  }, [props, rigidBodyContext === null || rigidBodyContext === void 0 ? void 0 : rigidBodyContext.options]);
  useUpdateColliderOptions(getInstance, mergedProps, colliderStates);
  useColliderEvents(getInstance, mergedProps, colliderEvents, getActiveCollisionEventsFromProps(rigidBodyContext === null || rigidBodyContext === void 0 ? void 0 : rigidBodyContext.options));
  return import_react.default.createElement("object3D", {
    position,
    rotation,
    quaternion,
    scale,
    ref: objectRef,
    name
  }, children);
});
var CuboidCollider = import_react.default.forwardRef((props, ref) => {
  return import_react.default.createElement(AnyCollider, _extends({}, props, {
    shape: "cuboid",
    ref
  }));
});
CuboidCollider.displayName = "CuboidCollider";
var RoundCuboidCollider = import_react.default.forwardRef((props, ref) => import_react.default.createElement(AnyCollider, _extends({}, props, {
  shape: "roundCuboid",
  ref
})));
RoundCuboidCollider.displayName = "RoundCuboidCollider";
var BallCollider = import_react.default.forwardRef((props, ref) => import_react.default.createElement(AnyCollider, _extends({}, props, {
  shape: "ball",
  ref
})));
BallCollider.displayName = "BallCollider";
var CapsuleCollider = import_react.default.forwardRef((props, ref) => import_react.default.createElement(AnyCollider, _extends({}, props, {
  shape: "capsule",
  ref
})));
CapsuleCollider.displayName = "CapsuleCollider";
var HeightfieldCollider = import_react.default.forwardRef((props, ref) => import_react.default.createElement(AnyCollider, _extends({}, props, {
  shape: "heightfield",
  ref
})));
HeightfieldCollider.displayName = "HeightfieldCollider";
var TrimeshCollider = import_react.default.forwardRef((props, ref) => import_react.default.createElement(AnyCollider, _extends({}, props, {
  shape: "trimesh",
  ref
})));
TrimeshCollider.displayName = "TrimeshCollider";
var ConeCollider = import_react.default.forwardRef((props, ref) => import_react.default.createElement(AnyCollider, _extends({}, props, {
  shape: "cone",
  ref
})));
ConeCollider.displayName = "ConeCollider";
var RoundConeCollider = import_react.default.forwardRef((props, ref) => import_react.default.createElement(AnyCollider, _extends({}, props, {
  shape: "roundCone",
  ref
})));
RoundConeCollider.displayName = "RoundConeCollider";
var CylinderCollider = import_react.default.forwardRef((props, ref) => import_react.default.createElement(AnyCollider, _extends({}, props, {
  shape: "cylinder",
  ref
})));
CylinderCollider.displayName = "CylinderCollider";
var RoundCylinderCollider = import_react.default.forwardRef((props, ref) => import_react.default.createElement(AnyCollider, _extends({}, props, {
  shape: "roundCylinder",
  ref
})));
CylinderCollider.displayName = "RoundCylinderCollider";
var ConvexHullCollider = import_react.default.forwardRef((props, ref) => import_react.default.createElement(AnyCollider, _extends({}, props, {
  shape: "convexHull",
  ref
})));
ConvexHullCollider.displayName = "ConvexHullCollider";
var _excluded$1 = ["ref", "children", "type", "position", "rotation", "scale", "quaternion", "transformState"];
var RigidBodyContext = (0, import_react.createContext)(void 0);
var useRigidBodyContext = () => (0, import_react.useContext)(RigidBodyContext);
var RigidBody = (0, import_react.memo)((props) => {
  const {
    ref,
    children,
    type,
    position,
    rotation,
    scale,
    quaternion,
    transformState
  } = props, objectProps = _objectWithoutProperties(props, _excluded$1);
  const objectRef = (0, import_react.useRef)(null);
  const rigidBodyRef = useForwardedRef(ref);
  const {
    world,
    rigidBodyStates,
    physicsOptions,
    rigidBodyEvents
  } = useRapier();
  const mergedOptions = (0, import_react.useMemo)(() => {
    return _objectSpread2(_objectSpread2(_objectSpread2({}, physicsOptions), props), {}, {
      children: void 0
    });
  }, [physicsOptions, props]);
  const immutablePropArray = immutableRigidBodyOptions.flatMap((key) => {
    return Array.isArray(mergedOptions[key]) ? [...mergedOptions[key]] : mergedOptions[key];
  });
  const childColliderProps = useChildColliderProps(objectRef, mergedOptions);
  const getRigidBody = useImperativeInstance(() => {
    const desc = rigidBodyDescFromOptions(mergedOptions);
    const rigidBody = world.createRigidBody(desc);
    if (typeof ref === "function") {
      ref(rigidBody);
    }
    rigidBodyRef.current = rigidBody;
    return rigidBody;
  }, (rigidBody) => {
    if (world.getRigidBody(rigidBody.handle)) {
      world.removeRigidBody(rigidBody);
    }
  }, immutablePropArray);
  (0, import_react.useEffect)(() => {
    const rigidBody = getRigidBody();
    const state = createRigidBodyState({
      rigidBody,
      object: objectRef.current
    });
    rigidBodyStates.set(rigidBody.handle, props.transformState ? props.transformState(state) : state);
    return () => {
      rigidBodyStates.delete(rigidBody.handle);
    };
  }, [getRigidBody]);
  useUpdateRigidBodyOptions(getRigidBody, mergedOptions, rigidBodyStates);
  useRigidBodyEvents(getRigidBody, mergedOptions, rigidBodyEvents);
  const contextValue = (0, import_react.useMemo)(() => {
    return {
      ref: objectRef,
      getRigidBody,
      options: mergedOptions
    };
  }, [getRigidBody]);
  return import_react.default.createElement(RigidBodyContext.Provider, {
    value: contextValue
  }, import_react.default.createElement("object3D", _extends({
    ref: objectRef
  }, objectProps, {
    position,
    rotation,
    quaternion,
    scale
  }), children, childColliderProps.map((colliderProps, index) => import_react.default.createElement(AnyCollider, _extends({
    key: index
  }, colliderProps)))));
});
RigidBody.displayName = "RigidBody";
var MeshCollider = (0, import_react.memo)((props) => {
  const {
    children,
    type
  } = props;
  const {
    physicsOptions
  } = useRapier();
  const object = (0, import_react.useRef)(null);
  const {
    options
  } = useRigidBodyContext();
  const mergedOptions = (0, import_react.useMemo)(() => {
    return _objectSpread2(_objectSpread2(_objectSpread2({}, physicsOptions), options), {}, {
      children: void 0,
      colliders: type
    });
  }, [physicsOptions, options]);
  const childColliderProps = useChildColliderProps(object, mergedOptions, false);
  return import_react.default.createElement("object3D", {
    ref: object,
    userData: {
      r3RapierType: "MeshCollider"
    }
  }, children, childColliderProps.map((colliderProps, index) => import_react.default.createElement(AnyCollider, _extends({
    key: index
  }, colliderProps))));
});
MeshCollider.displayName = "MeshCollider";
var _excluded = ["ref"];
var _excluded2 = ["children", "instances", "colliderNodes", "position", "rotation", "quaternion", "scale"];
var InstancedRigidBodies = (0, import_react.memo)((_ref) => {
  let {
    ref
  } = _ref, props = _objectWithoutProperties(_ref, _excluded);
  const rigidBodiesRef = useForwardedRef(ref, []);
  const objectRef = (0, import_react.useRef)(null);
  const instanceWrapperRef = (0, import_react.useRef)(null);
  const {
    // instanced props
    children,
    instances,
    colliderNodes = [],
    // wrapper object props
    position,
    rotation,
    quaternion,
    scale
    // rigid body specific props, and r3f-object props
  } = props, rigidBodyProps = _objectWithoutProperties(props, _excluded2);
  const childColliderProps = useChildColliderProps(objectRef, _objectSpread2(_objectSpread2({}, props), {}, {
    children: void 0
  }));
  const getInstancedMesh = () => {
    const firstChild = instanceWrapperRef.current.children[0];
    if (firstChild && "isInstancedMesh" in firstChild) {
      return firstChild;
    }
    return void 0;
  };
  (0, import_react.useEffect)(() => {
    const instancedMesh = getInstancedMesh();
    if (instancedMesh) {
      instancedMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    } else {
      console.warn("InstancedRigidBodies expects exactly one child, which must be an InstancedMesh");
    }
  }, []);
  const applyInstancedState = (state, index) => {
    const instancedMesh = getInstancedMesh();
    if (instancedMesh) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        getMatrix: (matrix) => {
          instancedMesh.getMatrixAt(index, matrix);
          return matrix;
        },
        setMatrix: (matrix) => {
          instancedMesh.setMatrixAt(index, matrix);
          instancedMesh.instanceMatrix.needsUpdate = true;
        },
        meshType: "instancedMesh"
      });
    }
    return state;
  };
  return import_react.default.createElement("object3D", _extends({
    ref: objectRef
  }, rigidBodyProps, {
    position,
    rotation,
    quaternion,
    scale
  }), import_react.default.createElement("object3D", {
    ref: instanceWrapperRef
  }, children), instances === null || instances === void 0 ? void 0 : instances.map((instance, index) => import_react.default.createElement(RigidBody, _extends({}, rigidBodyProps, instance, {
    ref: (body) => {
      rigidBodiesRef.current[index] = body;
    },
    transformState: (state) => applyInstancedState(state, index)
  }), import_react.default.createElement(import_react.default.Fragment, null, colliderNodes.map((node, index2) => import_react.default.createElement(import_react.Fragment, {
    key: index2
  }, node)), childColliderProps.map((colliderProps, colliderIndex) => import_react.default.createElement(AnyCollider, _extends({
    key: colliderIndex
  }, colliderProps)))))));
});
InstancedRigidBodies.displayName = "InstancedRigidBodies";
var useImpulseJoint = (body1, body2, params) => {
  const {
    world
  } = useRapier();
  const jointRef = (0, import_react.useRef)(void 0);
  useImperativeInstance(() => {
    if (body1.current && body2.current) {
      const newJoint = world.createImpulseJoint(params, body1.current, body2.current, true);
      jointRef.current = newJoint;
      return newJoint;
    }
  }, (joint) => {
    if (joint) {
      jointRef.current = void 0;
      if (world.getImpulseJoint(joint.handle)) {
        world.removeImpulseJoint(joint, true);
      }
    }
  }, []);
  return jointRef;
};
var useFixedJoint = (body1, body2, [body1Anchor, body1LocalFrame, body2Anchor, body2LocalFrame]) => {
  const {
    rapier
  } = useRapier();
  return useImpulseJoint(body1, body2, rapier.JointData.fixed(vector3ToRapierVector(body1Anchor), quaternionToRapierQuaternion(body1LocalFrame), vector3ToRapierVector(body2Anchor), quaternionToRapierQuaternion(body2LocalFrame)));
};
var useSphericalJoint = (body1, body2, [body1Anchor, body2Anchor]) => {
  const {
    rapier
  } = useRapier();
  return useImpulseJoint(body1, body2, rapier.JointData.spherical(vector3ToRapierVector(body1Anchor), vector3ToRapierVector(body2Anchor)));
};
var useRevoluteJoint = (body1, body2, [body1Anchor, body2Anchor, axis, limits]) => {
  const {
    rapier
  } = useRapier();
  const params = rapier.JointData.revolute(vector3ToRapierVector(body1Anchor), vector3ToRapierVector(body2Anchor), vector3ToRapierVector(axis));
  if (limits) {
    params.limitsEnabled = true;
    params.limits = limits;
  }
  return useImpulseJoint(body1, body2, params);
};
var usePrismaticJoint = (body1, body2, [body1Anchor, body2Anchor, axis, limits]) => {
  const {
    rapier
  } = useRapier();
  const params = rapier.JointData.prismatic(vector3ToRapierVector(body1Anchor), vector3ToRapierVector(body2Anchor), vector3ToRapierVector(axis));
  if (limits) {
    params.limitsEnabled = true;
    params.limits = limits;
  }
  return useImpulseJoint(body1, body2, params);
};
var useRopeJoint = (body1, body2, [body1Anchor, body2Anchor, length]) => {
  const {
    rapier
  } = useRapier();
  const vBody1Anchor = vector3ToRapierVector(body1Anchor);
  const vBody2Anchor = vector3ToRapierVector(body2Anchor);
  const params = rapier.JointData.rope(length, vBody1Anchor, vBody2Anchor);
  return useImpulseJoint(body1, body2, params);
};
var useSpringJoint = (body1, body2, [body1Anchor, body2Anchor, restLength, stiffness, damping]) => {
  const {
    rapier
  } = useRapier();
  const vBody1Anchor = vector3ToRapierVector(body1Anchor);
  const vBody2Anchor = vector3ToRapierVector(body2Anchor);
  const params = rapier.JointData.spring(restLength, stiffness, damping, vBody1Anchor, vBody2Anchor);
  return useImpulseJoint(body1, body2, params);
};
var interactionGroups = (memberships, filters) => (bitmask(memberships) << 16) + (filters !== void 0 ? bitmask(filters) : 65535);
var bitmask = (groups) => [groups].flat().reduce((acc, layer) => acc | 1 << layer, 0);
export {
  AnyCollider,
  BallCollider,
  CapsuleCollider,
  AI as CoefficientCombineRule,
  ConeCollider,
  ConvexHullCollider,
  CuboidCollider,
  CylinderCollider,
  HeightfieldCollider,
  InstancedRigidBodies,
  MeshCollider,
  Physics,
  qg as RapierCollider,
  GI as RapierRigidBody,
  RigidBody,
  RoundConeCollider,
  RoundCuboidCollider,
  RoundCylinderCollider,
  TrimeshCollider,
  euler,
  interactionGroups,
  quat,
  useAfterPhysicsStep,
  useBeforePhysicsStep,
  useFixedJoint,
  useImpulseJoint,
  usePrismaticJoint,
  useRapier,
  useRevoluteJoint,
  useRopeJoint,
  useSphericalJoint,
  useSpringJoint,
  vec3
};
//# sourceMappingURL=@react-three_rapier.js.map

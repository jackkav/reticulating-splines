'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var ReticulatingSplines = function (_Component) {
  inherits(ReticulatingSplines, _Component);

  function ReticulatingSplines(props) {
    classCallCheck(this, ReticulatingSplines);

    var _this = possibleConstructorReturn(this, (ReticulatingSplines.__proto__ || Object.getPrototypeOf(ReticulatingSplines)).call(this, props));

    _this.state = { spline: "Loading...", interval: props.interval || 2000 };
    return _this;
  }

  createClass(ReticulatingSplines, [{
    key: "timer",
    value: function timer() {
      var splines = this.props.splines;

      if (!splines) splines = getSplines(this.props.theme);
      var spline = splines[Math.floor(Math.random() * splines.length)];
      this.setState({ spline: spline });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.intervalId = setInterval(this.timer.bind(this), this.state.interval);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(
        "div",
        null,
        this.props.children(this.state)
      );
    }
  }]);
  return ReticulatingSplines;
}(React.Component);

var getSplines = function getSplines(theme) {
  if (theme === "sims") return simsSplines;
  if (theme === "web") return jargon;
  return simsSplines.concat(jargon);
};

var simsSplines = ["Adding Hidden Agendas", "Adjusting Bell Curves", "Aesthesizing Industrial Areas", "Aligning Covariance Matrices", "Applying Feng Shui Shaders", "Applying Theatre Soda Layer", "Asserting Packed Exemplars", "Attempting to Lock Back-Buffer", "Binding Sapling Root System", "Breeding Fauna", "Building Data Trees", "Bureacritizing Bureaucracies", "Calculating Inverse Probability Matrices", "Calculating Llama Expectoration Trajectory", "Calibrating Blue Skies", "Charging Ozone Layer", "Coalescing Cloud Formations", "Cohorting Exemplars", "Collecting Meteor Particles", "Compounding Inert Tessellations", "Compressing Fish Files", "Computing Optimal Bin Packing", "Concatenating Sub-Contractors", "Containing Existential Buffer", "Debarking Ark Ramp", "Debunching Unionized Commercial Services", "Deciding What Message to Display Next", "Decomposing Singular Values", "Decrementing Tectonic Plates", "Deleting Ferry Routes", "Depixelating Inner Mountain Surface Back Faces", "Depositing Slush Funds", "Destabilizing Economic Indicators", "Determining Width of Blast Fronts", "Deunionizing Bulldozers", "Dicing Models", "Diluting Livestock Nutrition Variables", "Downloading Satellite Terrain Data", "Exposing Flash Variables to Streak System", "Extracting Resources", "Factoring Pay Scale", "Fixing Election Outcome Matrix", "Flood-Filling Ground Water", "Flushing Pipe Network", "Gathering Particle Sources", "Generating Jobs", "Gesticulating Mimes", "Graphing Whale Migration", "Hiding Willio Webnet Mask", "Implementing Impeachment Routine", "Increasing Accuracy of RCI Simulators", "Increasing Magmafacation", "Initializing My Sim Tracking Mechanism", "Initializing Rhinoceros Breeding Timetable", "Initializing Robotic Click-Path AI", "Inserting Sublimated Messages", "Integrating Curves", "Integrating Illumination Form Factors", "Integrating Population Graphs", "Iterating Cellular Automata", "Lecturing Errant Subsystems", "Mixing Genetic Pool", "Modeling Object Components", "Mopping Occupant Leaks", "Normalizing Power", "Obfuscating Quigley Matrix", "Overconstraining Dirty Industry Calculations", "Partitioning City Grid Singularities", "Perturbing Matrices", "Pixalating Nude Patch", "Polishing Water Highlights", "Populating Lot Templates", "Preparing Sprites for Random Walks", "Prioritizing Landmarks", "Projecting Law Enforcement Pastry Intake", "Realigning Alternate Time Frames", "Reconfiguring User Mental Processes", "Relaxing Splines", "Removing Road Network Speed Bumps", "Removing Texture Gradients", "Removing Vehicle Avoidance Behavior", "Resolving GUID Conflict", "Reticulating Splines", "Retracting Phong Shader", "Retrieving from Back Store", "Reverse Engineering Image Consultant", "Routing Neural Network Infanstructure", "Scattering Rhino Food Sources", "Scrubbing Terrain", "Searching for Llamas", "Seeding Architecture Simulation Parameters", "Sequencing Particles", "Setting Advisor Moods", "Setting Inner Deity Indicators", "Setting Universal Physical Constants", "Sonically Enhancing Occupant-Free Timber", "Speculating Stock Market Indices", "Splatting Transforms", "Stratifying Ground Layers", "Sub-Sampling Water Data", "Synthesizing Gravity", "Synthesizing Wavelets", "Time-Compressing Simulator Clock", "Unable to Reveal Current Activity", "Weathering Buildings", "Zeroing Crime Network"];

var jargon = ["Deploying Cross-Media Relationships", "Targeting User-Centric Eyeballs", "Maximizing World-Class Markets", "Recontextualizing Turn-Key Experiences", "Strategizing Vertical Infomediaries", "Enabling Next-Generation Systems", "Delivering Leading-Edge Users", "Orchestrating Transparent Metrics", "Exploiting Value-Added Paradigms", "Unleashing Front-End Synergies", "Driving Real-Time E-Commerce", "Visualizing Distributed Solutions", "Transforming Intuitive Communities", "Synergizing Killer Channels", "Aggregating Open-Source Niches", "Productizing Cross-Platform Platforms", "Incentivizing Efficient Models", "Engaging One-to-One Networks", "Engineering Global Architectures", "Embracing Visionary Content", "Reinventing Synergistic Interfaces", "Extending Viral Web-Readiness", "Cultivating Dot-Com Portals", "Revolutionizing Dynamic Methodologies", "Streamlining Collaborative Deliverables", "Enhancing Holistic Technologies", "Utilizing Web-Enabled Bandwidth", "Repurposing Back-End ROI", "Implementing 24/7 Functionalities", "Synthesizing End-to-End Partnerships", "Integrating Seamless Mindshare", "Facilitating Virtual Supply-Chains", "Branding Compelling Web Services", "Matrixing Scalable E-Services", "Iterating Extensible Applications", "Scaling Integrated Infrastructures", "Growing Customized E-Markets", "Architecting Revolutionary Convergence", "Evolving Bleeding-Edge Schemas", "Monetizing Impactful E-Business", "Optimizing Wireless Initiatives", "Expediting Enterprise Vortals", "Whiteboarding Best-of-Breed E-Tailers", "Meshing Mission-Critical Action-Items"];

exports.ReticulatingSplines = ReticulatingSplines;

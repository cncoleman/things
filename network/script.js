tsParticles.load({

  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: ["#7ea1d9", "#7ebdd9", "#a8d97e", "#d97e7e"]
      //value: "#fefefe"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: .5
    },
    size: {
      value: { min: 1, max: 8 }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#808080",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      outModes: "out"
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1
        }
      },
      push: {
        quantity: 4
      }
    }
  }
});

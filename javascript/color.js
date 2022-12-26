async function get_json_data(name) {
  const response = await fetch('../res/' + name + '.json');
  return await response.json();
}

async function create_scatter_plot(name) {
  const data = await get_json_data(name);

  const x = data.x;
  const y = data.y;
  const z = data.z;
  const colors = data.color.map(color => `rgb(${color[0]}, ${color[1]}, ${color[2]})`);

  const layout = {
    scene: {
      xaxis: { title: data.xlabel, showspikes: false}, //, range: data.xrange},
      yaxis: { title: data.ylabel, showspikes: false}, //, range: data.yrange},
      zaxis: { title: data.zlabel, showspikes: false}, //, range: data.zrange},
      camera: {
        projection: {
          type: "orthographic"
        }
      },
      margin: {
        l: 0, b:0, t:0, r:0,
      }


    },
      margin: {
        l: 0, b:0, t:0, r:0,
      }
  };

  const trace = {
    x,
    y,
    z,
    mode: 'markers',
    marker: {
      color: colors,
      size: 3,
      //line: { width: .1, color: [100, 100, 100] }
    },
    type: "scatter3d",
    hoverinfo: 'none'
  };

  Plotly.newPlot(name, [trace], layout, { displayModeBar: false });
}

create_scatter_plot("srgb_lab");
create_scatter_plot("rec2020_lab");
create_scatter_plot("srgb_ICtCp");
create_scatter_plot("rec2020_ICtCp");



function get_values() {


}
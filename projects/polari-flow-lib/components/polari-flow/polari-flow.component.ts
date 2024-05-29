import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DragBehavior } from 'd3';
import * as d3 from 'd3';

@Component({
  selector: 'lib-flow-diagram',
  templateUrl: './flow-diagram.component.html',
  styleUrls: ['./flow-diagram.component.css']
})
export class FlowDiagramComponent implements OnInit, AfterViewInit {
  //@ts-ignore
  @ViewChild('diagram', { static: true }) private diagramContainer: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.createFlowDiagram();
  }

  private createFlowDiagram(): void {
    const flowDiagramElement = this.diagramContainer.nativeElement;
    const svg = d3.select(flowDiagramElement).append('svg')
      .attr('width', '100%')
      .attr('height', '100%');

    // Sample D3 code to create a simple flow diagram
    const data = {
      nodes: [
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
      ],
      links: [
        { source: 1, target: 2 },
        { source: 2, target: 3 },
      ]
    };

    //@ts-ignore
    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id((d: any) => d.id))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(flowDiagramElement.clientWidth / 2, flowDiagramElement.clientHeight / 2));

    const link = svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(data.links)
      .enter().append('line')
      .attr('stroke-width', 2);

    const node = svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(data.nodes)
      .enter().append('circle')
      .attr('r', 5)

    
    //d3.selectAll("").call(d3.drag().on("start", () => this.dragstarted.bind(this)))
      /* error occurring here
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));
        */

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);
    });

    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }
}

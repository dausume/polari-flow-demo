// projects/polari-flow-ui/src/lib/services/no-code-manager.service.ts

import { Injectable } from '@angular/core';
import { noCodeSolution } from '../models/noCodeSolution';
import { noCodeState } from '../models/noCodeState';
import { Slot } from '../models/slot';
import { Connector } from '../models/connector';

@Injectable({
  providedIn: 'root'
})
export class NoCodeManagerService {

  constructor() { }

  createNoCodeSolution(): noCodeSolution {
    const states: noCodeState[] = [
      new noCodeState(1, 0, 'circle', 1, 'Start', 'StateClass', 100, 100, 50, 50, [
        new Slot(1, 1, 'Output1', Math.PI / 2, true)
      ]),
      new noCodeState(2, 1, 'circle', 1, 'End', 'StateClass', 100, 100, 200, 200, [
        new Slot(2, 2, 'Input1', Math.PI / 2, false)
      ])
    ];

    const solution = new noCodeSolution(300, 800, 'MySolution', states);

    return solution;
  }

  createConnector(sourceSlot: Slot, sinkSlot: Slot): Connector {
    return new Connector(Date.now(), sourceSlot.index!, sinkSlot.index!);
  }
}

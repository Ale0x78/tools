// Copyright 2022 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

export abstract class Phase {
  name: string;
  type: PhaseType;

  constructor(name, type: PhaseType) {
    this.name = name;
    this.type = type;
  }
}

export enum PhaseType {
  Graph = "graph",
  TurboshaftGraph = "turboshaft_graph",
  Disassembly = "disassembly",
  Instructions = "instructions",
  Sequence = "sequence",
  Schedule = "schedule"
}

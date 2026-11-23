import { Line3, Vector3 } from 'three';

const segment = new Line3();
const closest = new Vector3();

export function distanceToSegment(point: Vector3, start: Vector3, end: Vector3): number {
  segment.set(start, end);
  return segment.closestPointToPoint(point, true, closest).distanceTo(point);
}

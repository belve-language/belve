import type {Cell} from "./Cell.ts";
export type EmptyCell = Cell<"empty"> &
	Readonly<{
		kind: "empty";
		span: number;
	}>;

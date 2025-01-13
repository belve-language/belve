import type {Cell} from "./Cell.ts";
export type LeafCell = Cell<"leaf"> &
	Readonly<{
		typeName: string;
	}>;

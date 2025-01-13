import type {Cell} from "./Cell.ts";
export type BranchCell = Cell<"branch"> &
	Readonly<{
		typeName: string;
		span: number;
	}>;

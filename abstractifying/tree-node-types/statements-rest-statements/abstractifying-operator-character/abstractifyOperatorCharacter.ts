import type {Operator} from "../../../../abstract-syntax-tree/operator/Operator.ts";
import type {OperatorCharacter} from "../../../../characters/operator/OperatorCharacter.ts";
export function abstractifyOperatorCharacter(operatorCharacter: OperatorCharacter): Operator {
	switch (operatorCharacter) {
		case ".": {
			return "and";
		}
		case ",": {
			return "or";
		}
	}
}

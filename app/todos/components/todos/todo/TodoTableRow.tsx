import clsx from 'clsx';
import { IconButton } from '@/app/common/components/buttons/IconButton';
import { EditIcon, RemoveIcon } from '@/app/common/components/icons/Icons';
import { Checkbox } from '@/app/common/components/inputs/Checkbox';
import { EditTextInput } from '@/app/common/components/inputs/EditTextInput';
import { TableCell } from '@/app/common/components/table/TableCell';
import { TableRow } from '@/app/common/components/table/TableRow';
import { Todo } from '@/app/todos/stores/todos/Todo';
import classes from './TodoTableRow.module.scss';
import { useTodo } from './useTodo';

type Props = {
  readonly todo: Todo;
};

export const TodoTableRow = ({ todo: { id, title, isDone } }: Props) => {
  const { editTodo, isEditable, removeTodo, setAsEditableTodo, toggleTodoDone } = useTodo(id);

  return (
    <TableRow>
      <TableCell>
        <Checkbox aria-label={title} isChecked={isDone} color="success" onChange={toggleTodoDone} />
      </TableCell>
      {isEditable ? (
        <TableCell>
          <EditTextInput onEditComplete={editTodo} text={title} />
        </TableCell>
      ) : (
        <TableCell
          className={clsx(classes.title, isDone && classes.isDone)}
          onDoubleClick={setAsEditableTodo}
        >
          {title}
        </TableCell>
      )}
      <TableCell className={classes.buttons}>
        <IconButton icon={<EditIcon />} onClick={setAsEditableTodo} />
        <IconButton icon={<RemoveIcon />} onClick={removeTodo} />
      </TableCell>
    </TableRow>
  );
};

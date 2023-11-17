import { ChainLogo } from '../../components/icons/ChainLogo';
import { Modal } from '../../components/layout/Modal';
import { getChainDisplayName } from './utils';

export function ChainSelectListModal({
  isOpen,
  close,
  caip2Ids,
  onSelect,
}: {
  isOpen: boolean;
  close: () => void;
  caip2Ids: Caip2Id[];
  onSelect: (caip2Id: Caip2Id) => void;
}) {
  const onSelectChain = (caip2Id: Caip2Id) => {
    return () => {
      onSelect(caip2Id);
      close();
    };
  };

  // Sort the caip2Ids so Kalychain is always first, and the rest alphabetically
  const sortedCaip2Ids = [...caip2Ids].sort((a: Caip2Id, b: Caip2Id) => {
    const nameA = getChainDisplayName(a, true);
    const nameB = getChainDisplayName(b, true);

    // Check if one of the names is Kalychain to prioritize it
    if (nameA === 'Kalychain') return -1;
    if (nameB === 'Kalychain') return 1;

    // If neither is Kalychain, proceed to sort alphabetically
    return nameA.localeCompare(nameB);
  });

  return (
    <Modal isOpen={isOpen} title="Select Chain" close={close}>
      <div className="mt-2 flex flex-col space-y-1">
        {sortedCaip2Ids.map((c) => (
          <button
            key={c}
            className="py-1.5 px-2 text-sm flex items-center rounded hover:bg-gray-100 active:bg-gray-200 transition-all duration-200"
            onClick={onSelectChain(c)}
          >
            <ChainLogo caip2Id={c} size={16} background={false} />
            <span className="ml-2">{getChainDisplayName(c, true)}</span>
          </button>
        ))}
      </div>
    </Modal>
  );
}

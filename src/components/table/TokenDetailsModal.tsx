import type { Token } from "@/types/token";
import { Modal } from "@/components/ui/Modal";

export default function TokenDetailsModal({
  token,
  open,
  onClose,
}: {
  token: Token | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!token) return null;

  return (
    <Modal
      open={open}
      onOpenChange={(v) => !v && onClose()}
      title={token.name}
    >
      <div className="flex gap-3 mb-4">
        <img
          src={token.image}
          alt={token.name}
          className="w-10 h-10 rounded"
        />
        <div>
          <div className="font-medium">{token.symbol}</div>
          <div className="text-xs text-gray-400">
            {token.category.replace("_", " ")}
          </div>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Price</span>
          <span>${token.price}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Market Cap</span>
          <span>${token.marketCap.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">FDV</span>
          <span>{token.fdv}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">24h Change</span>
          <span
            className={
              token.change24h >= 0
                ? "text-green-400"
                : "text-red-400"
            }
          >
            {token.change24h}%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Transactions</span>
          <span>{token.txCount}</span>
        </div>
      </div>
    </Modal>
  );
}

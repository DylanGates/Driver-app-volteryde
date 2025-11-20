"use client";

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Notification {
  id: string;
  initials: string;
  title: string;
  message: string;
  timestamp: string;
  amount?: string;
  isUnread: boolean;
}

export default function NotificationsModal({
  isOpen,
  onClose,
}: NotificationsModalProps) {
  const notifications: Notification[] = [
    {
      id: "1",
      initials: "AD",
      title: "Passenger Boarded",
      message: "Akosua Darko has successfully boarded the bus at University of Ghana, Stadium Bus Stop.",
      timestamp: "7m ago",
      isUnread: true,
    },
    {
      id: "2",
      initials: "KM",
      title: "Upcoming Drop-off",
      message: "Approaching drop-off point for Kwame Mensah at Adenta Bus Stop.",
      timestamp: "7m ago",
      isUnread: true,
    },
    {
      id: "3",
      initials: "KB",
      title: "Trip Cancelled",
      message: "Kofi Boateng cancelled their trip to Tech Junction.",
      timestamp: "7m ago",
      amount: "₵ 12.00",
      isUnread: true,
    },
    {
      id: "4",
      initials: "AD",
      title: "Passenger Boarded",
      message: "Akosua Darko has successfully boarded the bus at University of Ghana, Stadium Bus Stop.",
      timestamp: "7m ago",
      isUnread: true,
    },
    {
      id: "5",
      initials: "AD",
      title: "Passenger Boarded",
      message: "Akosua Darko has successfully boarded the bus at University of Ghana, Stadium Bus Stop.",
      timestamp: "7m ago",
      isUnread: false,
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-background shadow-2xl max-h-[90vh] overflow-hidden animate-in zoom-in-95 fade-in duration-200">
        {/* Green Header */}
        <div className="bg-brand-secondary px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <h2 className="text-lg font-semibold text-white">Notifications</h2>
            <span className="px-2 py-0.5 bg-white text-brand-secondary text-xs font-semibold rounded">
              3 new
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/10 rounded-full p-1 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="divide-y divide-foreground/10">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 transition-colors ${
                  notification.isUnread ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="flex gap-3">
                  {/* Avatar */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-sm font-semibold text-foreground">
                        {notification.initials}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-foreground">
                        {notification.title}
                      </h4>
                      {notification.isUnread && (
                        <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-brand-secondary mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-foreground/70 mt-1 leading-relaxed">
                      {notification.message}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1 text-xs text-foreground/50">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{notification.timestamp}</span>
                      </div>
                      {notification.amount && (
                        <div className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-foreground">
                          {notification.amount}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-foreground/10 px-6 py-3 bg-gray-50 flex items-center justify-between">
          <button className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            Clear All
          </button>
          <span className="text-sm text-foreground/60">6 notifications</span>
        </div>
      </div>
    </div>
  );
}

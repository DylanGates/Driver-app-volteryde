"use client";

import { useState } from "react";
import {
  AccountSettingsModal,
  NotificationsModal,
  DriverDetailsModal,
  CancelRideModal,
  DriverProfileModal,
  ReportPassengerModal,
  TripHistoryModal,
} from "@/components";

type ModalType = "settings" | "notifications" | "driver" | "cancel" | "profile" | "report" | "trip-history" | null;

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Modal Components Demo
          </h1>
          <p className="max-w-md text-lg text-foreground/70">
            Click any button below to preview the modal components
          </p>

          {/* Modal Trigger Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mt-8">
            <button
              onClick={() => openModal("settings")}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-foreground/10 hover:border-brand-primary hover:bg-brand-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Account Settings
                </h3>
                <p className="text-sm text-foreground/60 mt-1">
                  Multi-tab settings modal
                </p>
              </div>
            </button>

            <button
              onClick={() => openModal("notifications")}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-foreground/10 hover:border-brand-primary hover:bg-brand-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Notifications</h3>
                <p className="text-sm text-foreground/60 mt-1">
                  Notification center
                </p>
              </div>
            </button>

            <button
              onClick={() => openModal("driver")}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-foreground/10 hover:border-brand-primary hover:bg-brand-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Driver Details
                </h3>
                <p className="text-sm text-foreground/60 mt-1">
                  Driver profile & info
                </p>
              </div>
            </button>

            <button
              onClick={() => openModal("cancel")}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-foreground/10 hover:border-red-500 hover:bg-red-500/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Cancel Ride</h3>
                <p className="text-sm text-foreground/60 mt-1">
                  Cancellation flow
                </p>
              </div>
            </button>

            <button
              onClick={() => openModal("profile")}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-foreground/10 hover:border-brand-primary hover:bg-brand-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Driver Profile
                </h3>
                <p className="text-sm text-foreground/60 mt-1">
                  Profile page
                </p>
              </div>
            </button>

            <button
              onClick={() => openModal("report")}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-foreground/10 hover:border-red-500 hover:bg-red-500/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Report Passenger
                </h3>
                <p className="text-sm text-foreground/60 mt-1">
                  Report an issue
                </p>
              </div>
            </button>

            <button
              onClick={() => openModal("trip-history")}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-foreground/10 hover:border-brand-primary hover:bg-brand-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Trip History</h3>
                <p className="text-sm text-foreground/60 mt-1">
                  View all trips
                </p>
              </div>
            </button>
          </div>
        </div>
      </main>

      {/* Modals */}
      <AccountSettingsModal
        isOpen={activeModal === "settings"}
        onClose={closeModal}
      />
      <NotificationsModal
        isOpen={activeModal === "notifications"}
        onClose={closeModal}
      />
      <DriverDetailsModal
        isOpen={activeModal === "driver"}
        onClose={closeModal}
      />
      <CancelRideModal
        isOpen={activeModal === "cancel"}
        onClose={closeModal}
        onConfirm={(reason) => {
          console.log("Ride canceled. Reason:", reason);
        }}
      />
      <DriverProfileModal
        isOpen={activeModal === "profile"}
        onClose={closeModal}
      />
      <ReportPassengerModal
        isOpen={activeModal === "report"}
        onClose={closeModal}
        onSubmit={(category, comment) => {
          console.log("Report submitted. Category:", category, "Comment:", comment);
        }}
      />
      <TripHistoryModal
        isOpen={activeModal === "trip-history"}
        onClose={closeModal}
      />
    </div>
  );
}

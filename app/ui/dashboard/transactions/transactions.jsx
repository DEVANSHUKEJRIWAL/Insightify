import React from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
              Devanshu
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
              Ashish
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
              Saurabh
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
              Ravi
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancel}`}>Cancel</span>
            </td>
            <td>14.02.2024</td>
            <td>$3,200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions

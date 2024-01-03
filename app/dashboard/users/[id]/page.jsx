import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Devanshu
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Devanshu" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Devanshu@gmail.com" />
          <label>Password</label>
          <input type="password" name="phone" placeholder="Devanshu" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+123456" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="New york" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default page
